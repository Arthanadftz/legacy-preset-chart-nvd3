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
  label: (0, _core.t)('Bubble Chart'),
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['series', 'entity'], ['x'], ['y'], ['adhoc_filters'], ['custom_filters'], ['size'], [{
      name: 'max_bubble_size',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Max Bubble Size'),
        default: '25',
        choices: (0, _chartControls.formatSelectOptions)(['5', '10', '15', '25', '50', '75', '100'])
      }
    }], ['limit', null]]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    tabOverride: 'customize',
    controlSetRows: [['color_scheme', 'label_colors'], [_NVD3Controls.showLegend, null]]
  }, {
    label: (0, _core.t)('X Axis'),
    expanded: true,
    tabOverride: 'customize',
    controlSetRows: [[_NVD3Controls.xAxisLabel, _NVD3Controls.leftMargin], [{
      name: _NVD3Controls.xAxisFormat.name,
      config: { ..._NVD3Controls.xAxisFormat.config,
        default: 'SMART_NUMBER',
        choices: _chartControls.D3_FORMAT_OPTIONS
      }
    }, _NVD3Controls.xTicksLayout], [{
      name: 'x_log_scale',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('X Log Scale'),
        default: false,
        renderTrigger: true,
        description: (0, _core.t)('Use a log scale for the X-axis')
      }
    }, _NVD3Controls.xAxisShowMinmax]]
  }, {
    label: (0, _core.t)('Y Axis'),
    expanded: true,
    tabOverride: 'customize',
    controlSetRows: [[_NVD3Controls.yAxisLabel, _NVD3Controls.bottomMargin], ['y_axis_format', null], [_NVD3Controls.yLogScale, _NVD3Controls.yAxisShowMinmax]]
  }],
  controlOverrides: {
    color_scheme: {
      renderTrigger: false
    }
  }
};
exports.default = _default;