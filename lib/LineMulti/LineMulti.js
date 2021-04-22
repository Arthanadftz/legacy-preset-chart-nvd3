"use strict";

exports.__esModule = true;
exports.default = void 0;

var _d = _interopRequireDefault(require("d3"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _exploreUtils = require("../vendor/superset/exploreUtils");

var _ReactNVD = _interopRequireDefault(require("../ReactNVD3"));

var _transformProps = _interopRequireDefault(require("../transformProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable react/require-default-props, react/sort-prop-types */
const propTypes = {
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  annotationData: _propTypes.default.object,
  datasource: _propTypes.default.object,
  formData: _propTypes.default.object,
  queryData: _propTypes.default.object,
  rawFormData: _propTypes.default.object,
  hooks: _propTypes.default.shape({
    onAddFilter: _propTypes.default.func,
    onError: _propTypes.default.func
  })
};
const defaultProps = {};

function getJson(url) {
  return new Promise((resolve, reject) => {
    _d.default.json(url, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.data);
      }
    });
  });
}
/*
 * Show multiple line charts
 *
 * This visualization works by fetching the data from each of the saved
 * charts, building the queryData data and passing it along to nvd3Vis.
 */


class LineMulti extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryData: {}
    };
  }

  componentDidMount() {
    this.loadData(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      rawFormData
    } = this.props;
    const {
      rawFormData: nextRawFormData
    } = nextProps;
    const {
      queryData
    } = this.state;
    const {
      queryData: nextQueryData
    } = nextState;

    if (!(0, _lodash.isEqual)(queryData, nextQueryData) || !(0, _lodash.isEqual)(rawFormData, nextRawFormData)) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    this.loadData(this.props);
  }

  loadData(props) {
    const {
      formData,
      queryData
    } = props;
    const {
      slices
    } = queryData.data;
    const {
      extraFilters,
      filters,
      lineCharts,
      lineCharts2,
      prefixMetricWithSliceName,
      timeRange
    } = formData; // fetch data from all the charts

    const subslices = [...slices.axis1.map(subslice => [1, subslice]), ...slices.axis2.map(subslice => [2, subslice])];
    const promises = subslices.map(([yAxis, subslice]) => {
      const subsliceFormData = subslice.form_data;
      const combinedFormData = { ...subslice.form_data,
        extra_filters: extraFilters || [],
        filters: (subsliceFormData.filters || []).concat(filters || []),
        time_range: timeRange
      };
      const addPrefix = prefixMetricWithSliceName;
      return getJson((0, _exploreUtils.getExploreLongUrl)(combinedFormData, 'json')).then(data => data.map(({
        key,
        values
      }) => ({
        key: addPrefix ? `${subslice.slice_name}: ${key}` : key,
        type: combinedFormData.viz_type,
        values,
        yAxis
      })));
    });
    Promise.all(promises).then(data => {
      const queryDataCopy = { ...queryData
      };
      queryDataCopy.data = [].concat(...data); // add null values at the edges to fix multiChart bug when series with
      // different x values use different y axes

      if (lineCharts.length > 0 && lineCharts2.length > 0) {
        let minX = Infinity;
        let maxX = -Infinity;
        queryDataCopy.data.forEach(datum => {
          minX = Math.min(minX, ...datum.values.map(v => v.x));
          maxX = Math.max(maxX, ...datum.values.map(v => v.x));
        }); // add null values at the edges

        queryDataCopy.data.forEach(datum => {
          datum.values.push({
            x: minX,
            y: null
          });
          datum.values.push({
            x: maxX,
            y: null
          });
        });
      }

      this.setState({
        queryData: queryDataCopy
      });
    });
  }

  render() {
    const {
      queryData
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_ReactNVD.default, (0, _transformProps.default)({ ...this.props,
      queryData: (0, _lodash.cloneDeep)(queryData)
    }));
  }

}

LineMulti.propTypes = propTypes;
LineMulti.defaultProps = defaultProps;
var _default = LineMulti;
exports.default = _default;