"use strict";

exports.__esModule = true;
exports.timeSeriesSection = exports.yAxisLabel = exports.reduceXTicks = exports.barStacked = exports.showBarValue = exports.richTooltip = exports.xAxisShowMinmax = exports.yAxisBounds = exports.yLogScale = exports.xAxisFormat = exports.xTicksLayout = exports.bottomMargin = exports.xAxisLabel = exports.showControls = exports.showLegend = exports.showBrush = exports.lineInterpolation = exports.yAxisShowMinmax = exports.leftMargin = exports.showMarkers = exports.yAxis2Format = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _chartControls = require("@arthanasti/chart-controls");

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

/*
  Plugins in question:

  AreaChartPlugin,
  BarChartPlugin,
  BubbleChartPlugin,
  BulletChartPlugin,
  CompareChartPlugin,
  DistBarChartPlugin,
  DualLineChartPlugin,
  LineChartPlugin,
  LineMultiChartPlugin,
  PieChartPlugin,
  TimePivotChartPlugin,
*/
const yAxis2Format = {
  name: 'y_axis_2_format',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: (0, _core.t)('Right Axis Format'),
    default: 'SMART_NUMBER',
    choices: _chartControls.D3_FORMAT_OPTIONS,
    description: _chartControls.D3_FORMAT_DOCS
  }
};
exports.yAxis2Format = yAxis2Format;
const showMarkers = {
  name: 'show_markers',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Show Markers'),
    renderTrigger: true,
    default: false,
    description: (0, _core.t)('Show data points as circle markers on the lines')
  }
};
exports.showMarkers = showMarkers;
const leftMargin = {
  name: 'left_margin',
  config: {
    type: 'SelectControl',
    freeForm: true,
    clearable: false,
    label: (0, _core.t)('Left Margin'),
    choices: (0, _chartControls.formatSelectOptions)(['auto', 50, 75, 100, 125, 150, 200]),
    default: 'auto',
    renderTrigger: true,
    description: (0, _core.t)('Left margin, in pixels, allowing for more room for axis labels')
  }
};
exports.leftMargin = leftMargin;
const yAxisShowMinmax = {
  name: 'y_axis_showminmax',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Y bounds'),
    renderTrigger: true,
    default: false,
    description: (0, _core.t)('Whether to display the min and max values of the Y-axis')
  }
};
exports.yAxisShowMinmax = yAxisShowMinmax;
const lineInterpolation = {
  name: 'line_interpolation',
  config: {
    type: 'SelectControl',
    label: (0, _core.t)('Line Style'),
    renderTrigger: true,
    choices: (0, _chartControls.formatSelectOptions)(['linear', 'basis', 'cardinal', 'monotone', 'step-before', 'step-after']),
    default: 'linear',
    description: (0, _core.t)('Line interpolation as defined by d3.js')
  }
};
exports.lineInterpolation = lineInterpolation;
const showBrush = {
  name: 'show_brush',
  config: {
    type: 'SelectControl',
    label: (0, _core.t)('Show Range Filter'),
    renderTrigger: true,
    clearable: false,
    default: 'auto',
    choices: [['yes', 'Yes'], ['no', 'No'], ['auto', 'Auto']],
    description: (0, _core.t)('Whether to display the time range interactive selector')
  }
};
exports.showBrush = showBrush;
const showLegend = {
  name: 'show_legend',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Legend'),
    renderTrigger: true,
    default: true,
    description: (0, _core.t)('Whether to display the legend (toggles)')
  }
};
exports.showLegend = showLegend;
const showControls = {
  name: 'show_controls',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Extra Controls'),
    renderTrigger: true,
    default: false,
    description: (0, _core.t)('Whether to show extra controls or not. Extra controls ' + 'include things like making mulitBar charts stacked ' + 'or side by side.')
  }
};
exports.showControls = showControls;
const xAxisLabel = {
  name: 'x_axis_label',
  config: {
    type: 'TextControl',
    label: (0, _core.t)('X Axis Label'),
    renderTrigger: true,
    default: ''
  }
};
exports.xAxisLabel = xAxisLabel;
const bottomMargin = {
  name: 'bottom_margin',
  config: {
    type: 'SelectControl',
    clearable: false,
    freeForm: true,
    label: (0, _core.t)('Bottom Margin'),
    choices: (0, _chartControls.formatSelectOptions)(['auto', 50, 75, 100, 125, 150, 200]),
    default: 'auto',
    renderTrigger: true,
    description: (0, _core.t)('Bottom margin, in pixels, allowing for more room for axis labels')
  }
};
exports.bottomMargin = bottomMargin;
const xTicksLayout = {
  name: 'x_ticks_layout',
  config: {
    type: 'SelectControl',
    label: (0, _core.t)('X Tick Layout'),
    choices: (0, _chartControls.formatSelectOptions)(['auto', 'flat', '45??', 'staggered']),
    default: 'auto',
    clearable: false,
    renderTrigger: true,
    description: (0, _core.t)('The way the ticks are laid out on the X-axis')
  }
};
exports.xTicksLayout = xTicksLayout;
const xAxisFormat = {
  name: 'x_axis_format',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: (0, _core.t)('X Axis Format'),
    renderTrigger: true,
    choices: _chartControls.D3_TIME_FORMAT_OPTIONS,
    default: 'smart_date',
    description: _chartControls.D3_FORMAT_DOCS
  }
};
exports.xAxisFormat = xAxisFormat;
const yLogScale = {
  name: 'y_log_scale',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Y Log Scale'),
    default: false,
    renderTrigger: true,
    description: (0, _core.t)('Use a log scale for the Y-axis')
  }
};
exports.yLogScale = yLogScale;
const yAxisBounds = {
  name: 'y_axis_bounds',
  config: {
    type: 'BoundsControl',
    label: (0, _core.t)('Y Axis Bounds'),
    renderTrigger: true,
    default: [null, null],
    description: (0, _core.t)('Bounds for the Y-axis. When left empty, the bounds are ' + 'dynamically defined based on the min/max of the data. Note that ' + "this feature will only expand the axis range. It won't " + "narrow the data's extent.")
  }
};
exports.yAxisBounds = yAxisBounds;
const xAxisShowMinmax = {
  name: 'x_axis_showminmax',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('X bounds'),
    renderTrigger: true,
    default: false,
    description: (0, _core.t)('Whether to display the min and max values of the X-axis')
  }
};
exports.xAxisShowMinmax = xAxisShowMinmax;
const richTooltip = {
  name: 'rich_tooltip',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Rich Tooltip'),
    renderTrigger: true,
    default: true,
    description: (0, _core.t)('The rich tooltip shows a list of all series for that point in time')
  }
};
exports.richTooltip = richTooltip;
const showBarValue = {
  name: 'show_bar_value',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Bar Values'),
    default: false,
    renderTrigger: true,
    description: (0, _core.t)('Show the value on top of the bar')
  }
};
exports.showBarValue = showBarValue;
const barStacked = {
  name: 'bar_stacked',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Stacked Bars'),
    renderTrigger: true,
    default: false,
    description: null
  }
};
exports.barStacked = barStacked;
const reduceXTicks = {
  name: 'reduce_x_ticks',
  config: {
    type: 'CheckboxControl',
    label: (0, _core.t)('Reduce X ticks'),
    renderTrigger: true,
    default: false,
    description: (0, _core.t)('Reduces the number of X-axis ticks to be rendered. ' + 'If true, the x-axis will not overflow and labels may be ' + 'missing. If false, a minimum width will be applied ' + 'to columns and the width may overflow into an ' + 'horizontal scroll.')
  }
};
exports.reduceXTicks = reduceXTicks;
const yAxisLabel = {
  name: 'y_axis_label',
  config: {
    type: 'TextControl',
    label: (0, _core.t)('Y Axis Label'),
    renderTrigger: true,
    default: ''
  }
};
exports.yAxisLabel = yAxisLabel;
const timeSeriesSection = [{
  label: (0, _core.t)('Query'),
  expanded: true,
  controlSetRows: [['metrics'], ['adhoc_filters'], ['custom_filters'], ['groupby'], ['limit', 'timeseries_limit_metric'], [{
    name: 'order_desc',
    config: {
      type: 'CheckboxControl',
      label: (0, _core.t)('Sort Descending'),
      default: true,
      description: (0, _core.t)('Whether to sort descending or ascending')
    }
  }, {
    name: 'contribution',
    config: {
      type: 'CheckboxControl',
      label: (0, _core.t)('Contribution'),
      default: false,
      description: (0, _core.t)('Compute the contribution to the total')
    }
  }], ['row_limit', null]]
}, {
  label: (0, _core.t)('Advanced Analytics'),
  tabOverride: 'data',
  description: (0, _core.t)('This section contains options ' + 'that allow for advanced analytical post processing ' + 'of query results'),
  controlSetRows: [// eslint-disable-next-line react/jsx-key
  [/*#__PURE__*/_react.default.createElement("h1", {
    className: "section-header"
  }, (0, _core.t)('Rolling Window'))], [{
    name: 'rolling_type',
    config: {
      type: 'SelectControl',
      label: (0, _core.t)('Rolling Function'),
      default: 'None',
      choices: (0, _chartControls.formatSelectOptions)(['None', 'mean', 'sum', 'std', 'cumsum']),
      description: (0, _core.t)('Defines a rolling window function to apply, works along ' + 'with the [Periods] text box')
    }
  }, {
    name: 'rolling_periods',
    config: {
      type: 'TextControl',
      label: (0, _core.t)('Periods'),
      isInt: true,
      description: (0, _core.t)('Defines the size of the rolling window function, ' + 'relative to the time granularity selected')
    }
  }, {
    name: 'min_periods',
    config: {
      type: 'TextControl',
      label: (0, _core.t)('Min Periods'),
      isInt: true,
      description: (0, _core.t)('The minimum number of rolling periods required to show ' + 'a value. For instance if you do a cumulative sum on 7 days ' + 'you may want your "Min Period" to be 7, so that all data points ' + 'shown are the total of 7 periods. This will hide the "ramp up" ' + 'taking place over the first 7 periods')
    }
  }], // eslint-disable-next-line react/jsx-key
  [/*#__PURE__*/_react.default.createElement("h1", {
    className: "section-header"
  }, (0, _core.t)('Time Comparison'))], [{
    name: 'time_compare',
    config: {
      type: 'SelectControl',
      multi: true,
      freeForm: true,
      label: (0, _core.t)('Time Shift'),
      choices: (0, _chartControls.formatSelectOptions)(['1 day', '1 week', '28 days', '30 days', '52 weeks', '1 year', '104 weeks', '2 years']),
      description: (0, _core.t)('Overlay one or more timeseries from a ' + 'relative time period. Expects relative time deltas ' + 'in natural language (example:  24 hours, 7 days, ' + '52 weeks, 365 days). Free text is supported.')
    }
  }, {
    name: 'comparison_type',
    config: {
      type: 'SelectControl',
      label: (0, _core.t)('Calculation type'),
      default: 'values',
      choices: [['values', 'Actual Values'], ['absolute', 'Absolute difference'], ['percentage', 'Percentage change'], ['ratio', 'Ratio']],
      description: (0, _core.t)('How to display time shifts: as individual lines; as the ' + 'absolute difference between the main time series and each time shift; ' + 'as the percentage change; or as the ratio between series and time shifts.')
    }
  }], // eslint-disable-next-line react/jsx-key
  [/*#__PURE__*/_react.default.createElement("h1", {
    className: "section-header"
  }, (0, _core.t)('Python Functions'))], // eslint-disable-next-line react/jsx-key
  [/*#__PURE__*/_react.default.createElement("h2", {
    className: "section-header"
  }, "pandas.resample")], [{
    name: 'resample_rule',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: (0, _core.t)('Rule'),
      default: null,
      choices: (0, _chartControls.formatSelectOptions)(['1T', '1H', '1D', '7D', '1M', '1AS']),
      description: (0, _core.t)('Pandas resample rule')
    }
  }, {
    name: 'resample_method',
    config: {
      type: 'SelectControl',
      freeForm: true,
      label: (0, _core.t)('Method'),
      default: null,
      choices: (0, _chartControls.formatSelectOptions)(['asfreq', 'bfill', 'ffill', 'median', 'mean', 'sum']),
      description: (0, _core.t)('Pandas resample method')
    }
  }]]
}];
exports.timeSeriesSection = timeSeriesSection;