"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

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
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['metrics'], ['adhoc_filters'], ['custom_filters'], ['groupby'], ['columns'], ['row_limit'], [{
      name: 'contribution',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Contribution'),
        default: false,
        description: (0, _core.t)('Compute the contribution to the total')
      }
    }]]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    controlSetRows: [['color_scheme', 'label_colors'], [_NVD3Controls.showLegend, _NVD3Controls.showBarValue], [_NVD3Controls.barStacked, {
      name: 'order_bars',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Sort Bars'),
        default: false,
        renderTrigger: true,
        description: (0, _core.t)('Sort bars by x labels.')
      }
    }], ['y_axis_format', _NVD3Controls.yAxisLabel], [_NVD3Controls.showControls, null]]
  }, {
    label: (0, _core.t)('X Axis'),
    expanded: true,
    controlSetRows: [[_NVD3Controls.xAxisLabel, _NVD3Controls.bottomMargin], [_NVD3Controls.xTicksLayout, _NVD3Controls.reduceXTicks]]
  }],
  controlOverrides: {
    groupby: {
      label: (0, _core.t)('Series'),
      validators: [_core.validateNonEmpty]
    },
    columns: {
      label: (0, _core.t)('Breakdowns'),
      description: (0, _core.t)('Defines how each series is broken down')
    }
  }
};
exports.default = _default;