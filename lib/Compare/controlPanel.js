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
  controlPanelSections: [_NVD3Controls.timeSeriesSection[0], {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    controlSetRows: [['color_scheme', 'label_colors']]
  }, {
    label: (0, _core.t)('X Axis'),
    expanded: true,
    controlSetRows: [[_NVD3Controls.xAxisLabel, _NVD3Controls.bottomMargin], [_NVD3Controls.xTicksLayout, _NVD3Controls.xAxisFormat], [_NVD3Controls.xAxisShowMinmax, null]]
  }, {
    label: (0, _core.t)('Y Axis'),
    expanded: true,
    controlSetRows: [[_NVD3Controls.yAxisLabel, _NVD3Controls.leftMargin], [_NVD3Controls.yAxisShowMinmax, _NVD3Controls.yLogScale], ['y_axis_format', _NVD3Controls.yAxisBounds]]
  }, _NVD3Controls.timeSeriesSection[1], _chartControls.sections.annotations],
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