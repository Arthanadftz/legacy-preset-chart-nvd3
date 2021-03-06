"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@arthanasti/chart-controls");

var _NVD3Controls = require("../NVD3Controls");

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
    expanded: true,
    controlSetRows: [['color_scheme', 'label_colors'], [_NVD3Controls.xAxisFormat]]
  }, {
    label: (0, _core.t)('Y Axis 1'),
    expanded: true,
    controlSetRows: [['metric', 'y_axis_format']]
  }, {
    label: (0, _core.t)('Y Axis 2'),
    expanded: true,
    controlSetRows: [['metric_2', _NVD3Controls.yAxis2Format]]
  }, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['adhoc_filters'], ['custom_filters']]
  }, _chartControls.sections.annotations],
  controlOverrides: {
    metric: {
      label: (0, _core.t)('Left Axis Metric'),
      description: (0, _core.t)('Choose a metric for left axis')
    },
    y_axis_format: {
      label: (0, _core.t)('Left Axis Format')
    }
  },
  sectionOverrides: {
    druidTimeSeries: {
      controlSetRows: [['granularity', 'druid_time_origin'], ['time_range']]
    },
    sqlaTimeSeries: {
      controlSetRows: [['granularity_sqla', 'time_grain_sqla'], ['time_range']]
    }
  }
};
exports.default = _default;