"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@arthanasti/chart-controls");

var _NVD3Controls = require("../NVD3Controls");

/* eslint-disable camelcase */

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
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Chart Options'),
    tabOverride: 'customize',
    expanded: true,
    controlSetRows: [['color_scheme', 'label_colors'], [{
      name: 'prefix_metric_with_slice_name',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Prefix metric name with slice name'),
        default: false,
        renderTrigger: true
      }
    }, null], [_NVD3Controls.showLegend, _NVD3Controls.showMarkers], [_NVD3Controls.lineInterpolation, null]]
  }, {
    label: (0, _core.t)('X Axis'),
    expanded: true,
    controlSetRows: [[_NVD3Controls.xAxisLabel, _NVD3Controls.bottomMargin], [_NVD3Controls.xTicksLayout, _NVD3Controls.xAxisFormat], [_NVD3Controls.xAxisShowMinmax, null]]
  }, {
    label: (0, _core.t)('Y Axis Left'),
    expanded: true,
    controlSetRows: [[{
      name: 'line_charts',
      config: {
        type: 'SelectAsyncControl',
        multi: true,
        label: (0, _core.t)('Left Axis chart(s)'),
        validators: [_core.validateNonEmpty],
        default: [],
        description: (0, _core.t)('Choose one or more charts for left axis'),
        dataEndpoint: '/sliceasync/api/read?_flt_0_viz_type=line&_flt_7_viz_type=line_multi',
        placeholder: (0, _core.t)('Select charts'),
        onAsyncErrorMessage: (0, _core.t)('Error while fetching charts'),
        mutator: data => {
          if (!data || !data.result) {
            return [];
          }

          return data.result.map(o => ({
            value: o.id,
            label: o.slice_name
          }));
        }
      }
    }, 'y_axis_format']]
  }, {
    label: (0, _core.t)('Y Axis Right'),
    expanded: false,
    controlSetRows: [[{
      name: 'line_charts_2',
      config: {
        type: 'SelectAsyncControl',
        multi: true,
        label: (0, _core.t)('Right Axis chart(s)'),
        validators: [],
        default: [],
        description: (0, _core.t)('Choose one or more charts for right axis'),
        dataEndpoint: '/sliceasync/api/read?_flt_0_viz_type=line&_flt_7_viz_type=line_multi',
        placeholder: (0, _core.t)('Select charts'),
        onAsyncErrorMessage: (0, _core.t)('Error while fetching charts'),
        mutator: data => {
          if (!data || !data.result) {
            return [];
          }

          return data.result.map(o => ({
            value: o.id,
            label: o.slice_name
          }));
        }
      }
    }, _NVD3Controls.yAxis2Format]]
  }, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['adhoc_filters'], ['custom_filters']]
  }, _chartControls.sections.annotations],
  controlOverrides: {
    y_axis_format: {
      label: (0, _core.t)('Left Axis Format')
    }
  },
  sectionOverrides: {
    sqlaTimeSeries: {
      controlSetRows: [['time_range']]
    },
    druidTimeSeries: {
      controlSetRows: [['time_range']]
    }
  }
};
exports.default = _default;