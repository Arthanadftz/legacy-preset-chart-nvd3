"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

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
    controlSetRows: [['metric'], ['adhoc_filters'], ['custom_filters']]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    controlSetRows: [[{
      name: 'ranges',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Ranges'),
        default: '',
        description: (0, _core.t)('Ranges to highlight with shading')
      }
    }, {
      name: 'range_labels',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Range labels'),
        default: '',
        description: (0, _core.t)('Labels for the ranges')
      }
    }], [{
      name: 'markers',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Markers'),
        default: '',
        description: (0, _core.t)('List of values to mark with triangles')
      }
    }, {
      name: 'marker_labels',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Marker labels'),
        default: '',
        description: (0, _core.t)('Labels for the markers')
      }
    }], [{
      name: 'marker_lines',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Marker lines'),
        default: '',
        description: (0, _core.t)('List of values to mark with lines')
      }
    }, {
      name: 'marker_line_labels',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Marker line labels'),
        default: '',
        description: (0, _core.t)('Labels for the marker lines')
      }
    }]]
  }]
};
exports.default = _default;