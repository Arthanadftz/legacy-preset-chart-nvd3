"use strict";

exports.__esModule = true;
exports.default = void 0;

var _lodash = require("lodash");

var _d = _interopRequireDefault(require("d3"));

var _nvd3Fork = _interopRequireDefault(require("nvd3-fork"));

var _mathjs = require("mathjs");

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@superset-ui/core");

require("nvd3-fork/build/nv.d3.css");

var _AnnotationTypes = _interopRequireWildcard(require("./vendor/superset/AnnotationTypes"));

var _isTruthy = _interopRequireDefault(require("./utils/isTruthy"));

var _utils = require("./utils");

var _PropTypes = require("./PropTypes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/sort-prop-types */

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

/* eslint-disable-next-line */
const NO_DATA_RENDER_DATA = [{
  text: 'No data',
  dy: '-.75em',
  class: 'header'
}, {
  text: 'Adjust filters or check the Datasource.',
  dy: '.75em',
  class: 'body'
}]; // Override the noData render function to make a prettier UX
// Code adapted from https://github.com/novus/nvd3/blob/master/src/utils.js#L653

_nvd3Fork.default.utils.noData = function noData(chart, container) {
  const opt = chart.options();
  const margin = opt.margin();

  const height = _nvd3Fork.default.utils.availableHeight(null, container, margin);

  const width = _nvd3Fork.default.utils.availableWidth(null, container, margin);

  const x = margin.left + width / 2;
  const y = margin.top + height / 2; // Remove any previously created chart components

  container.selectAll('g').remove();
  const noDataText = container.selectAll('.nv-noData').data(NO_DATA_RENDER_DATA);
  noDataText.enter().append('text').attr('class', d => `nvd3 nv-noData ${d.class}`).attr('dy', d => d.dy).style('text-anchor', 'middle');
  noDataText.attr('x', x).attr('y', y).text(d => d.text);
};

const {
  getColor,
  getScale
} = _core.CategoricalColorNamespace; // Limit on how large axes margins can grow as the chart window is resized

const MAX_MARGIN_PAD = 30;
const MIN_HEIGHT_FOR_BRUSH = 480;
const MAX_NO_CHARACTERS_IN_LABEL = 40;
const BREAKPOINTS = {
  small: 340
};
const TIMESERIES_VIZ_TYPES = ['line', 'dual_line', 'line_multi', 'area', 'compare', 'bar', 'time_pivot'];
const propTypes = {
  data: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([// pie
  _PropTypes.categoryAndValueXYType, // dist-bar
  _propTypes.default.shape({
    key: _propTypes.default.string,
    values: _propTypes.default.arrayOf(_PropTypes.categoryAndValueXYType)
  }), // area, line, compare, bar
  _propTypes.default.shape({
    key: _propTypes.default.arrayOf(_propTypes.default.string),
    values: _propTypes.default.arrayOf(_PropTypes.numericXYType)
  }), // dual-line
  _propTypes.default.shape({
    classed: _propTypes.default.string,
    key: _propTypes.default.string,
    type: _propTypes.default.string,
    values: _propTypes.default.arrayOf(_PropTypes.numericXYType),
    yAxis: _propTypes.default.number
  }), // box-plot
  _propTypes.default.shape({
    label: _propTypes.default.string,
    values: _propTypes.default.arrayOf(_PropTypes.boxPlotValueType)
  }), // bubble
  _propTypes.default.shape({
    key: _propTypes.default.string,
    values: _propTypes.default.arrayOf(_propTypes.default.object)
  })])), // bullet
  _PropTypes.bulletDataType]),
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  annotationData: _propTypes.default.object,
  annotationLayers: _propTypes.default.arrayOf(_PropTypes.annotationLayerType),
  bottomMargin: _PropTypes.numberOrAutoType,
  colorScheme: _propTypes.default.string,
  comparisonType: _propTypes.default.string,
  contribution: _propTypes.default.bool,
  leftMargin: _PropTypes.numberOrAutoType,
  onError: _propTypes.default.func,
  showLegend: _propTypes.default.bool,
  showMarkers: _propTypes.default.bool,
  useRichTooltip: _propTypes.default.bool,
  vizType: _propTypes.default.oneOf(['area', 'bar', 'box_plot', 'bubble', 'bullet', 'compare', 'column', 'dist_bar', 'line', 'line_multi', 'time_pivot', 'pie', 'dual_line']),
  xAxisFormat: _propTypes.default.string,
  numberFormat: _propTypes.default.string,
  xAxisLabel: _propTypes.default.string,
  xAxisShowMinMax: _propTypes.default.bool,
  xIsLogScale: _propTypes.default.bool,
  xTicksLayout: _propTypes.default.oneOf(['auto', 'staggered', '45??']),
  yAxisFormat: _propTypes.default.string,
  yAxisBounds: _propTypes.default.arrayOf(_propTypes.default.number),
  yAxisLabel: _propTypes.default.string,
  yAxisShowMinMax: _propTypes.default.bool,
  yIsLogScale: _propTypes.default.bool,
  // 'dist-bar' only
  orderBars: _propTypes.default.bool,
  // 'bar' or 'dist-bar'
  isBarStacked: _propTypes.default.bool,
  showBarValue: _propTypes.default.bool,
  // 'bar', 'dist-bar' or 'column'
  reduceXTicks: _propTypes.default.bool,
  // 'bar', 'dist-bar' or 'area'
  showControls: _propTypes.default.bool,
  // 'line' only
  showBrush: _propTypes.default.oneOf([true, 'yes', false, 'no', 'auto']),
  onBrushEnd: _propTypes.default.func,
  // 'line-multi' or 'dual-line'
  yAxis2Format: _propTypes.default.string,
  // 'line', 'time-pivot', 'dual-line' or 'line-multi'
  lineInterpolation: _propTypes.default.string,
  // 'pie' only
  isDonut: _propTypes.default.bool,
  isPieLabelOutside: _propTypes.default.bool,
  pieLabelType: _propTypes.default.oneOf(['key', 'value', 'percent', 'key_value', 'key_percent', 'key_value_percent']),
  showLabels: _propTypes.default.bool,
  // 'area' only
  areaStackedStyle: _propTypes.default.string,
  // 'bubble' only
  entity: _propTypes.default.string,
  maxBubbleSize: _propTypes.default.number,
  xField: _PropTypes.stringOrObjectWithLabelType,
  yField: _PropTypes.stringOrObjectWithLabelType,
  sizeField: _PropTypes.stringOrObjectWithLabelType,
  // time-pivot only
  baseColor: _PropTypes.rgbObjectType
};

const NOOP = () => {};

const formatter = (0, _core.getNumberFormatter)();

function nvd3Vis(element, props) {
  const {
    data,
    width: maxWidth,
    height: maxHeight,
    annotationData,
    annotationLayers = [],
    areaStackedStyle,
    baseColor,
    bottomMargin,
    colorScheme,
    comparisonType,
    contribution,
    entity,
    isBarStacked,
    isDonut,
    isPieLabelOutside,
    leftMargin,
    lineInterpolation = 'linear',
    markerLabels,
    markerLines,
    markerLineLabels,
    markers,
    maxBubbleSize,
    onBrushEnd = NOOP,
    onError = NOOP,
    orderBars,
    pieLabelType,
    rangeLabels,
    ranges,
    reduceXTicks = false,
    showBarValue,
    showBrush,
    showControls,
    showLabels,
    showLegend,
    showMarkers,
    sizeField,
    useRichTooltip,
    vizType,
    xAxisFormat,
    numberFormat,
    xAxisLabel,
    xAxisShowMinMax = false,
    xField,
    xIsLogScale,
    xTicksLayout,
    yAxisFormat,
    yAxis2Format,
    yAxisBounds,
    yAxisLabel,
    yAxisShowMinMax = false,
    yField,
    yIsLogScale
  } = props;
  const isExplore = document.querySelector('#explorer-container') !== null;
  const container = element;
  container.innerHTML = '';
  const activeAnnotationLayers = annotationLayers.filter(layer => layer.show);
  const chartId = container.parentElement && container.parentElement.id !== '' ? container.parentElement.id : null;
  let chart;
  let width = maxWidth;
  let colorKey = 'key';
  container.style.width = `${maxWidth}px`;
  container.style.height = `${maxHeight}px`;

  function isVizTypes(types) {
    return types.includes(vizType);
  }

  const drawGraph = function drawGraph() {
    const d3Element = _d.default.select(element);

    d3Element.classed('superset-legacy-chart-nvd3', true);
    d3Element.classed(`superset-legacy-chart-nvd3-${(0, _lodash.kebabCase)(vizType)}`, true);
    let svg = d3Element.select('svg');

    if (svg.empty()) {
      svg = d3Element.append('svg');
    }

    const height = vizType === 'bullet' ? Math.min(maxHeight, 50) : maxHeight;
    const isTimeSeries = isVizTypes(TIMESERIES_VIZ_TYPES); // Handling xAxis ticks settings

    const staggerLabels = xTicksLayout === 'staggered';
    const xLabelRotation = xTicksLayout === 'auto' && isVizTypes(['column', 'dist_bar']) || xTicksLayout === '45??' ? 45 : 0;

    if (xLabelRotation === 45 && (0, _isTruthy.default)(showBrush)) {
      onError((0, _core.t)('You cannot use 45?? tick layout along with the time range filter'));
      return null;
    }

    const canShowBrush = (0, _isTruthy.default)(showBrush) || showBrush === 'auto' && maxHeight >= MIN_HEIGHT_FOR_BRUSH && xTicksLayout !== '45??';
    const numberFormatter = (0, _core.getNumberFormatter)(numberFormat);

    switch (vizType) {
      case 'line':
        if (canShowBrush) {
          chart = _nvd3Fork.default.models.lineWithFocusChart();

          if (staggerLabels) {
            // Give a bit more room to focus area if X axis ticks are staggered
            chart.focus.margin({
              bottom: 40
            });
            chart.focusHeight(80);
          }

          chart.focus.xScale(_d.default.time.scale.utc());
        } else {
          chart = _nvd3Fork.default.models.lineChart();
        }

        chart.xScale(_d.default.time.scale.utc());
        chart.interpolate(lineInterpolation);
        chart.clipEdge(false);
        break;

      case 'time_pivot':
        chart = _nvd3Fork.default.models.lineChart();
        chart.xScale(_d.default.time.scale.utc());
        chart.interpolate(lineInterpolation);
        break;

      case 'dual_line':
      case 'line_multi':
        chart = _nvd3Fork.default.models.multiChart();
        chart.interpolate(lineInterpolation);
        chart.xScale(_d.default.time.scale.utc());
        break;

      case 'bar':
        chart = _nvd3Fork.default.models.multiBarChart().showControls(showControls).groupSpacing(0.1);

        if (!reduceXTicks) {
          width = (0, _utils.computeBarChartWidth)(data, isBarStacked, maxWidth);
        }

        chart.width(width);
        chart.xAxis.showMaxMin(false);
        chart.stacked(isBarStacked);
        break;

      case 'dist_bar':
        chart = _nvd3Fork.default.models.multiBarChart().showControls(showControls).reduceXTicks(reduceXTicks).groupSpacing(0.1); // Distance between each group of bars.

        chart.xAxis.showMaxMin(false);
        chart.stacked(isBarStacked);

        if (orderBars) {
          data.forEach(d => {
            d.values.sort((a, b) => (0, _utils.tryNumify)(a.x) < (0, _utils.tryNumify)(b.x) ? -1 : 1);
          });
        }

        if (!reduceXTicks) {
          width = (0, _utils.computeBarChartWidth)(data, isBarStacked, maxWidth);
        }

        chart.width(width);
        break;

      case 'pie':
        chart = _nvd3Fork.default.models.pieChart();
        colorKey = 'x';
        chart.valueFormat(numberFormatter);

        if (isDonut) {
          chart.donut(true);
        }

        chart.showLabels(showLabels);
        chart.labelsOutside(isPieLabelOutside); // Configure the minimum slice size for labels to show up

        chart.labelThreshold(0.05);
        chart.cornerRadius(true);

        if (['key', 'value', 'percent'].includes(pieLabelType)) {
          chart.labelType(pieLabelType);
        } else if (pieLabelType === 'key_value') {
          chart.labelType(d => `${d.data.x}: ${numberFormatter(d.data.y)}`);
        } else {
          // pieLabelType in ['key_percent', 'key_value_percent']
          const total = _d.default.sum(data, d => d.y);

          const percentFormatter = (0, _core.getNumberFormatter)(_core.NumberFormats.PERCENT_2_POINT);

          if (pieLabelType === 'key_percent') {
            chart.tooltip.valueFormatter(d => percentFormatter(d));
            chart.labelType(d => `${d.data.x}: ${percentFormatter(d.data.y / total)}`);
          } else {
            // pieLabelType === 'key_value_percent'
            chart.tooltip.valueFormatter(d => `${numberFormatter(d)} (${percentFormatter(d / total)})`);
            chart.labelType(d => `${d.data.x}: ${numberFormatter(d.data.y)} (${percentFormatter(d.data.y / total)})`);
          }
        } // Pie chart does not need top margin


        chart.margin({
          top: 0
        });
        break;

      case 'column':
        chart = _nvd3Fork.default.models.multiBarChart().reduceXTicks(false);
        break;

      case 'compare':
        chart = _nvd3Fork.default.models.cumulativeLineChart();
        chart.xScale(_d.default.time.scale.utc());
        chart.useInteractiveGuideline(true);
        chart.xAxis.showMaxMin(false);
        break;

      case 'bubble':
        chart = _nvd3Fork.default.models.scatterChart();
        chart.showDistX(false);
        chart.showDistY(false);
        chart.tooltip.contentGenerator(d => (0, _utils.generateBubbleTooltipContent)({
          point: d.point,
          entity,
          xField,
          yField,
          sizeField,
          xFormatter: (0, _utils.getTimeOrNumberFormatter)(xAxisFormat),
          yFormatter: (0, _utils.getTimeOrNumberFormatter)(yAxisFormat),
          sizeFormatter: formatter
        }));
        chart.pointRange([5, maxBubbleSize ** 2]);
        chart.pointDomain([0, _d.default.max(data, d => _d.default.max(d.values, v => v.size))]);
        break;

      case 'area':
        chart = _nvd3Fork.default.models.stackedAreaChart();
        chart.showControls(showControls);
        chart.style(areaStackedStyle);
        chart.xScale(_d.default.time.scale.utc());
        break;

      case 'box_plot':
        colorKey = 'label';
        chart = _nvd3Fork.default.models.boxPlotChart();
        chart.x(d => d.label);
        chart.maxBoxWidth(75); // prevent boxes from being incredibly wide

        break;

      case 'bullet':
        chart = _nvd3Fork.default.models.bulletChart();
        data.rangeLabels = rangeLabels;
        data.ranges = ranges;
        data.markerLabels = markerLabels;
        data.markerLines = markerLines;
        data.markerLineLabels = markerLineLabels;
        data.markers = markers;
        break;

      default:
        throw new Error(`Unrecognized visualization for nvd3${vizType}`);
    } // Assuming the container has padding already other than for top margin


    chart.margin({
      left: 0,
      right: 0,
      bottom: 0
    });

    if (showBarValue) {
      (0, _utils.drawBarValues)(svg, data, isBarStacked, yAxisFormat);
      chart.dispatch.on('stateChange.drawBarValues', () => {
        (0, _utils.drawBarValues)(svg, data, isBarStacked, yAxisFormat);
      });
    }

    if (canShowBrush && onBrushEnd !== NOOP) {
      if (chart.focus) {
        chart.focus.dispatch.on('brush', event => {
          const timeRange = (0, _utils.stringifyTimeRange)(event.extent);

          if (timeRange) {
            event.brush.on('brushend', () => {
              onBrushEnd(timeRange);
            });
          }
        });
      }
    }

    if (chart.xAxis && chart.xAxis.staggerLabels) {
      chart.xAxis.staggerLabels(staggerLabels);
    }

    if (chart.xAxis && chart.xAxis.rotateLabels) {
      chart.xAxis.rotateLabels(xLabelRotation);
    }

    if (chart.x2Axis && chart.x2Axis.staggerLabels) {
      chart.x2Axis.staggerLabels(staggerLabels);
    }

    if (chart.x2Axis && chart.x2Axis.rotateLabels) {
      chart.x2Axis.rotateLabels(xLabelRotation);
    }

    if ('showLegend' in chart && typeof showLegend !== 'undefined') {
      if (width < BREAKPOINTS.small && vizType !== 'pie') {
        chart.showLegend(false);
      } else {
        chart.showLegend(showLegend);
      }
    }

    if (yIsLogScale) {
      chart.yScale(_d.default.scale.log());
    }

    if (xIsLogScale) {
      chart.xScale(_d.default.scale.log());
    }

    let xAxisFormatter;

    if (isTimeSeries) {
      xAxisFormatter = (0, _core.getTimeFormatter)(xAxisFormat); // In tooltips, always use the verbose time format

      chart.interactiveLayer.tooltip.headerFormatter(_core.smartDateVerboseFormatter);
    } else {
      xAxisFormatter = (0, _utils.getTimeOrNumberFormatter)(xAxisFormat);
    }

    if (chart.x2Axis && chart.x2Axis.tickFormat) {
      chart.x2Axis.tickFormat(xAxisFormatter);
    }

    if (chart.xAxis && chart.xAxis.tickFormat) {
      const isXAxisString = isVizTypes(['dist_bar', 'box_plot']);

      if (isXAxisString) {
        chart.xAxis.tickFormat(d => d.length > MAX_NO_CHARACTERS_IN_LABEL ? `${d.slice(0, Math.max(0, MAX_NO_CHARACTERS_IN_LABEL))}???` : d);
      } else {
        chart.xAxis.tickFormat(xAxisFormatter);
      }
    }

    let yAxisFormatter = (0, _utils.getTimeOrNumberFormatter)(yAxisFormat);

    if (chart.yAxis && chart.yAxis.tickFormat) {
      if ((contribution || comparisonType === 'percentage') && (!yAxisFormat || yAxisFormat === _core.NumberFormats.SMART_NUMBER || yAxisFormat === _core.NumberFormats.SMART_NUMBER_SIGNED)) {
        // When computing a "Percentage" or "Contribution" selected,
        // force a percentage format if no custom formatting set
        yAxisFormatter = (0, _core.getNumberFormatter)(_core.NumberFormats.PERCENT_1_POINT);
      }

      chart.yAxis.tickFormat(yAxisFormatter);
    }

    if (chart.y2Axis && chart.y2Axis.tickFormat) {
      chart.y2Axis.tickFormat(yAxisFormatter);
    }

    if (chart.yAxis) {
      chart.yAxis.ticks(5);
    }

    if (chart.y2Axis) {
      chart.y2Axis.ticks(5);
    } // Set showMaxMin for all axis


    (0, _utils.setAxisShowMaxMin)(chart.xAxis, xAxisShowMinMax);
    (0, _utils.setAxisShowMaxMin)(chart.x2Axis, xAxisShowMinMax);
    (0, _utils.setAxisShowMaxMin)(chart.yAxis, yAxisShowMinMax);
    (0, _utils.setAxisShowMaxMin)(chart.y2Axis, yAxisShowMinMax);

    if (vizType === 'time_pivot') {
      if (baseColor) {
        const {
          r,
          g,
          b
        } = baseColor;
        chart.color(d => {
          const alpha = d.rank > 0 ? d.perc * 0.5 : 1;
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        });
      }

      chart.useInteractiveGuideline(true);
      chart.interactiveLayer.tooltip.contentGenerator(d => (0, _utils.generateTimePivotTooltip)(d, xAxisFormatter, yAxisFormatter));
    } else if (vizType !== 'bullet') {
      const colorFn = getScale(colorScheme);
      chart.color(d => d.color || colorFn((0, _utils.cleanColorInput)(d[colorKey])));
    }

    if (isVizTypes(['line', 'area']) && useRichTooltip) {
      chart.useInteractiveGuideline(true);

      if (vizType === 'line') {
        chart.interactiveLayer.tooltip.contentGenerator(d => (0, _utils.generateRichLineTooltipContent)(d, _core.smartDateVerboseFormatter, yAxisFormatter));
      } else {
        // area chart
        chart.interactiveLayer.tooltip.contentGenerator(d => (0, _utils.generateAreaChartTooltipContent)(d, _core.smartDateVerboseFormatter, yAxisFormatter, chart));
      }
    }

    if (isVizTypes(['compare'])) {
      chart.interactiveLayer.tooltip.contentGenerator(d => (0, _utils.generateCompareTooltipContent)(d, yAxisFormatter));
    }

    if (isVizTypes(['dual_line', 'line_multi'])) {
      const yAxisFormatter1 = (0, _core.getNumberFormatter)(yAxisFormat);
      const yAxisFormatter2 = (0, _core.getNumberFormatter)(yAxis2Format);
      chart.yAxis1.tickFormat(yAxisFormatter1);
      chart.yAxis2.tickFormat(yAxisFormatter2);
      const yAxisFormatters = data.map(datum => datum.yAxis === 1 ? yAxisFormatter1 : yAxisFormatter2);
      chart.useInteractiveGuideline(true);
      chart.interactiveLayer.tooltip.contentGenerator(d => (0, _utils.generateMultiLineTooltipContent)(d, xAxisFormatter, yAxisFormatters));

      if (vizType === 'dual_line') {
        chart.showLegend(width > BREAKPOINTS.small);
      } else {
        chart.showLegend(showLegend);
      }
    } // This is needed for correct chart dimensions if a chart is rendered in a hidden container


    chart.width(width);
    chart.height(height);
    svg.datum(data).transition().duration(500).attr('height', height).attr('width', width).call(chart); // For log scale, only show 1, 10, 100, 1000, ...

    if (yIsLogScale) {
      chart.yAxis.tickFormat(d => d !== 0 && Math.log10(d) % 1 === 0 ? yAxisFormatter(d) : '');
    }

    if (xLabelRotation > 0) {
      // shift labels to the left so they look better
      const xTicks = svg.select('.nv-x.nv-axis > g').selectAll('g');
      xTicks.selectAll('text').attr('dx', -6.5);
    }

    const applyYAxisBounds = () => {
      if (chart.yDomain && Array.isArray(yAxisBounds) && yAxisBounds.length === 2) {
        const [customMin, customMax] = yAxisBounds;
        const hasCustomMin = (0, _core.isDefined)(customMin) && !Number.isNaN(customMin);
        const hasCustomMax = (0, _core.isDefined)(customMax) && !Number.isNaN(customMax);

        if ((hasCustomMin || hasCustomMax) && vizType === 'area' && chart.style() === 'expand') {
          // Because there are custom bounds, we need to override them back to 0%-100% since this
          // is an expanded area chart
          chart.yDomain([0, 1]);
        } else if ((hasCustomMin || hasCustomMax) && vizType === 'area' && chart.style() === 'stream') {
          // Because there are custom bounds, we need to override them back to the domain of the
          // data since this is a stream area chart
          chart.yDomain((0, _utils.computeStackedYDomain)(data));
        } else if (hasCustomMin && hasCustomMax) {
          // Override the y domain if there's both a custom min and max
          chart.yDomain([customMin, customMax]);
          chart.clipEdge(true);
        } else if (hasCustomMin || hasCustomMax) {
          // Only one of the bounds has been set, so we need to manually calculate the other one
          let [trueMin, trueMax] = [0, 1]; // These viz types can be stacked
          // They correspond to the nvd3 stackedAreaChart and multiBarChart

          if (vizType === 'area' || isVizTypes(['bar', 'dist_bar']) && chart.stacked()) {
            // This is a stacked area chart or a stacked bar chart
            [trueMin, trueMax] = (0, _utils.computeStackedYDomain)(data);
          } else {
            [trueMin, trueMax] = (0, _utils.computeYDomain)(data);
          }

          const min = hasCustomMin ? customMin : trueMin;
          const max = hasCustomMax ? customMax : trueMax;
          chart.yDomain([min, max]);
          chart.clipEdge(true);
        }
      }
    };

    applyYAxisBounds(); // Also reapply on each state change to account for enabled/disabled series

    if (chart.dispatch && chart.dispatch.stateChange) {
      chart.dispatch.on('stateChange.applyYAxisBounds', applyYAxisBounds);
    } // align yAxis1 and yAxis2 ticks


    if (isVizTypes(['dual_line', 'line_multi'])) {
      const count = chart.yAxis1.ticks();
      const ticks1 = chart.yAxis1.scale().domain(chart.yAxis1.domain()).nice(count).ticks(count);
      const ticks2 = chart.yAxis2.scale().domain(chart.yAxis2.domain()).nice(count).ticks(count); // match number of ticks in both axes

      const difference = ticks1.length - ticks2.length;

      if (ticks1.length > 0 && ticks2.length > 0 && difference !== 0) {
        const smallest = difference < 0 ? ticks1 : ticks2;
        const delta = smallest[1] - smallest[0];

        for (let i = 0; i < Math.abs(difference); i += 1) {
          if (i % 2 === 0) {
            smallest.unshift(smallest[0] - delta);
          } else {
            smallest.push(smallest[smallest.length - 1] + delta);
          }
        }

        chart.yDomain1([ticks1[0], ticks1[ticks1.length - 1]]);
        chart.yDomain2([ticks2[0], ticks2[ticks2.length - 1]]);
        chart.yAxis1.tickValues(ticks1);
        chart.yAxis2.tickValues(ticks2);
      }
    }

    if (showMarkers) {
      svg.selectAll('.nv-point').style('stroke-opacity', 1).style('fill-opacity', 1); // redo on legend toggle; nvd3 calls the callback *before* the line is
      // drawn, so we need to add a small delay here

      chart.dispatch.on('stateChange.showMarkers', () => {
        setTimeout(() => {
          svg.selectAll('.nv-point').style('stroke-opacity', 1).style('fill-opacity', 1);
        }, 10);
      });
    }

    if (chart.yAxis !== undefined || chart.yAxis2 !== undefined) {
      // Hack to adjust y axis left margin to accommodate long numbers
      const marginPad = Math.ceil(Math.min(maxWidth * (isExplore ? 0.01 : 0.03), MAX_MARGIN_PAD)); // Hack to adjust margins to accommodate long axis tick labels.
      // - has to be done only after the chart has been rendered once
      // - measure the width or height of the labels
      // ---- (x axis labels are rotated 45 degrees so we use height),
      // - adjust margins based on these measures and render again

      const margins = chart.margin();

      if (chart.xAxis) {
        margins.bottom = 28;
      }

      const maxYAxisLabelWidth = (0, _utils.getMaxLabelSize)(svg, chart.yAxis2 ? 'nv-y1' : 'nv-y');
      const maxXAxisLabelHeight = (0, _utils.getMaxLabelSize)(svg, 'nv-x');
      margins.left = maxYAxisLabelWidth + marginPad;

      if (yAxisLabel && yAxisLabel !== '') {
        margins.left += 25;
      }

      if (showBarValue) {
        // Add more margin to avoid label colliding with legend.
        margins.top += 24;
      }

      if (xAxisShowMinMax) {
        // If x bounds are shown, we need a right margin
        margins.right = Math.max(20, maxXAxisLabelHeight / 2) + marginPad;
      }

      if (xLabelRotation === 45) {
        margins.bottom = maxXAxisLabelHeight * Math.sin(Math.PI * xLabelRotation / 180) + marginPad + 30;
        margins.right = maxXAxisLabelHeight * Math.cos(Math.PI * xLabelRotation / 180) + marginPad;
      } else if (staggerLabels) {
        margins.bottom = 40;
      }

      if (isVizTypes(['dual_line', 'line_multi'])) {
        const maxYAxis2LabelWidth = (0, _utils.getMaxLabelSize)(svg, 'nv-y2');
        margins.right = maxYAxis2LabelWidth + marginPad;
      }

      if (bottomMargin && bottomMargin !== 'auto') {
        margins.bottom = parseInt(bottomMargin, 10);
      }

      if (leftMargin && leftMargin !== 'auto') {
        margins.left = leftMargin;
      }

      if (xAxisLabel && xAxisLabel !== '' && chart.xAxis) {
        margins.bottom += 25;
        let distance = 0;

        if (margins.bottom && !Number.isNaN(margins.bottom)) {
          distance = margins.bottom - 45;
        } // nvd3 bug axisLabelDistance is disregarded on xAxis
        // https://github.com/krispo/angular-nvd3/issues/90


        chart.xAxis.axisLabel(xAxisLabel).axisLabelDistance(distance);
      }

      if (yAxisLabel && yAxisLabel !== '' && chart.yAxis) {
        let distance = 0;

        if (margins.left && !Number.isNaN(margins.left)) {
          distance = margins.left - 70;
        }

        chart.yAxis.axisLabel(yAxisLabel).axisLabelDistance(distance);
      }

      if (isTimeSeries && annotationData && activeAnnotationLayers.length > 0) {
        // Time series annotations add additional data
        const timeSeriesAnnotations = activeAnnotationLayers.filter(layer => layer.annotationType === _AnnotationTypes.default.TIME_SERIES).reduce((bushel, a) => bushel.concat((annotationData[a.name] || []).map(series => {
          if (!series) {
            return {};
          }

          const key = Array.isArray(series.key) ? `${a.name}, ${series.key.join(', ')}` : `${a.name}, ${series.key}`;
          return { ...series,
            key,
            color: a.color,
            strokeWidth: a.width,
            classed: `${a.opacity} ${a.style} nv-timeseries-annotation-layer showMarkers${a.showMarkers} hideLine${a.hideLine}`
          };
        })), []);
        data.push(...timeSeriesAnnotations);
      } // Uniquely identify tooltips based on chartId so this chart instance only
      // controls its own tooltips


      if (chartId) {
        if (chart && chart.interactiveLayer && chart.interactiveLayer.tooltip) {
          chart.interactiveLayer.tooltip.classes([(0, _utils.generateTooltipClassName)(chartId)]);
        }

        if (chart && chart.tooltip) {
          chart.tooltip.classes([(0, _utils.generateTooltipClassName)(chartId)]);
        }
      } // render chart


      chart.margin(margins);
      svg.datum(data).transition().duration(500).attr('width', width).attr('height', height).call(chart); // On scroll, hide (not remove) tooltips so they can reappear on hover.
      // Throttle to only 4x/second.

      window.addEventListener('scroll', (0, _lodash.throttle)(() => (0, _utils.hideTooltips)(false), 250)); // The below code should be run AFTER rendering because chart is updated in call()

      if (isTimeSeries && activeAnnotationLayers.length > 0) {
        // Formula annotations
        const formulas = activeAnnotationLayers.filter(a => a.annotationType === _AnnotationTypes.default.FORMULA).map(a => ({ ...a,
          formula: (0, _mathjs.parse)(a.value)
        }));
        let xMax;
        let xMin;
        let xScale;

        if (vizType === 'bar') {
          xMin = _d.default.min(data[0].values, d => d.x);
          xMax = _d.default.max(data[0].values, d => d.x);
          xScale = _d.default.scale.quantile().domain([xMin, xMax]).range(chart.xAxis.range());
        } else {
          xMin = chart.xAxis.scale().domain()[0].valueOf();
          xMax = chart.xAxis.scale().domain()[1].valueOf();

          if (chart.xScale) {
            xScale = chart.xScale();
          } else if (chart.xAxis.scale) {
            xScale = chart.xAxis.scale();
          } else {
            xScale = _d.default.scale.linear();
          }
        }

        if (xScale && xScale.clamp) {
          xScale.clamp(true);
        }

        if (formulas.length > 0) {
          const xValues = [];

          if (vizType === 'bar') {
            // For bar-charts we want one data point evaluated for every
            // data point that will be displayed.
            const distinct = data.reduce((xVals, d) => {
              d.values.forEach(x => xVals.add(x.x));
              return xVals;
            }, new Set());
            xValues.push(...distinct.values());
            xValues.sort();
          } else {
            // For every other time visualization it should be ok, to have a
            // data points in even intervals.
            let period = Math.min(...data.map(d => Math.min(...d.values.slice(1).map((v, i) => v.x - d.values[i].x))));
            const dataPoints = (xMax - xMin) / (period || 1); // make sure that there are enough data points and not too many

            period = dataPoints < 100 ? (xMax - xMin) / 100 : period;
            period = dataPoints > 500 ? (xMax - xMin) / 500 : period;
            xValues.push(xMin);

            for (let x = xMin; x < xMax; x += period) {
              xValues.push(x);
            }

            xValues.push(xMax);
          }

          const formulaData = formulas.map(fo => ({
            key: fo.name,
            values: xValues.map(x => ({
              y: fo.formula.evaluate({
                x
              }),
              x
            })),
            color: fo.color,
            strokeWidth: fo.width,
            classed: `${fo.opacity} ${fo.style}`
          }));
          data.push(...formulaData);
        }

        const xAxis = chart.xAxis1 ? chart.xAxis1 : chart.xAxis;
        const yAxis = chart.yAxis1 ? chart.yAxis1 : chart.yAxis;
        const chartWidth = xAxis.scale().range()[1];
        const annotationHeight = yAxis.scale().range()[0];

        if (annotationData) {
          // Event annotations
          activeAnnotationLayers.filter(x => x.annotationType === _AnnotationTypes.default.EVENT && annotationData && annotationData[x.name]).forEach((config, index) => {
            const e = (0, _AnnotationTypes.applyNativeColumns)(config); // Add event annotation layer

            const annotations = _d.default.select(element).select('.nv-wrap').append('g').attr('class', `nv-event-annotation-layer-${index}`);

            const aColor = e.color || getColor((0, _utils.cleanColorInput)(e.name), colorScheme);
            const tip = (0, _utils.tipFactory)({ ...e,
              annotationTipClass: `arrow-down nv-event-annotation-layer-${config.sourceType}`
            });
            const records = (annotationData[e.name].records || []).map(r => {
              const timeValue = new Date(_moment.default.utc(r[e.timeColumn]));
              return { ...r,
                [e.timeColumn]: timeValue
              };
            }).filter(record => !Number.isNaN(record[e.timeColumn].getMilliseconds()));

            if (records.length > 0) {
              annotations.selectAll('line').data(records).enter().append('line').attr({
                x1: d => xScale(new Date(d[e.timeColumn])),
                y1: 0,
                x2: d => xScale(new Date(d[e.timeColumn])),
                y2: annotationHeight
              }).attr('class', `${e.opacity} ${e.style}`).style('stroke', aColor).style('stroke-width', e.width).on('mouseover', tip.show).on('mouseout', tip.hide).call(tip);
            } // update annotation positions on brush event


            if (chart.focus) {
              chart.focus.dispatch.on('onBrush.event-annotation', () => {
                annotations.selectAll('line').data(records).attr({
                  x1: d => xScale(new Date(d[e.timeColumn])),
                  y1: 0,
                  x2: d => xScale(new Date(d[e.timeColumn])),
                  y2: annotationHeight,
                  opacity: d => {
                    const x = xScale(new Date(d[e.timeColumn]));
                    return x > 0 && x < chartWidth ? 1 : 0;
                  }
                });
              });
            }
          }); // Interval annotations

          activeAnnotationLayers.filter(x => x.annotationType === _AnnotationTypes.default.INTERVAL && annotationData && annotationData[x.name]).forEach((config, index) => {
            const e = (0, _AnnotationTypes.applyNativeColumns)(config); // Add interval annotation layer

            const annotations = _d.default.select(element).select('.nv-wrap').append('g').attr('class', `nv-interval-annotation-layer-${index}`);

            const aColor = e.color || getColor((0, _utils.cleanColorInput)(e.name), colorScheme);
            const tip = (0, _utils.tipFactory)(e);
            const records = (annotationData[e.name].records || []).map(r => {
              const timeValue = new Date(_moment.default.utc(r[e.timeColumn]));
              const intervalEndValue = new Date(_moment.default.utc(r[e.intervalEndColumn]));
              return { ...r,
                [e.timeColumn]: timeValue,
                [e.intervalEndColumn]: intervalEndValue
              };
            }).filter(record => !Number.isNaN(record[e.timeColumn].getMilliseconds()) && !Number.isNaN(record[e.intervalEndColumn].getMilliseconds()));

            if (records.length > 0) {
              annotations.selectAll('rect').data(records).enter().append('rect').attr({
                x: d => Math.min(xScale(new Date(d[e.timeColumn])), xScale(new Date(d[e.intervalEndColumn]))),
                y: 0,
                width: d => Math.max(Math.abs(xScale(new Date(d[e.intervalEndColumn])) - xScale(new Date(d[e.timeColumn]))), 1),
                height: annotationHeight
              }).attr('class', `${e.opacity} ${e.style}`).style('stroke-width', e.width).style('stroke', aColor).style('fill', aColor).style('fill-opacity', 0.2).on('mouseover', tip.show).on('mouseout', tip.hide).call(tip);
            } // update annotation positions on brush event


            if (chart.focus) {
              chart.focus.dispatch.on('onBrush.interval-annotation', () => {
                annotations.selectAll('rect').data(records).attr({
                  x: d => xScale(new Date(d[e.timeColumn])),
                  width: d => {
                    const x1 = xScale(new Date(d[e.timeColumn]));
                    const x2 = xScale(new Date(d[e.intervalEndColumn]));
                    return x2 - x1;
                  }
                });
              });
            }
          });
        } // rerender chart appended with annotation layer


        svg.datum(data).attr('height', height).attr('width', width).call(chart); // Display styles for Time Series Annotations

        chart.dispatch.on('renderEnd.timeseries-annotation', () => {
          _d.default.selectAll('.slice_container .nv-timeseries-annotation-layer.showMarkerstrue .nv-point').style('stroke-opacity', 1).style('fill-opacity', 1);

          _d.default.selectAll('.slice_container .nv-timeseries-annotation-layer.hideLinetrue').style('stroke-width', 0);
        });
      }
    }

    (0, _utils.wrapTooltip)(chart, maxWidth);
    return chart;
  }; // Remove tooltips before rendering chart, if the chart is being re-rendered sometimes
  // there are left over tooltips in the dom,
  // this will clear them before rendering the chart again.


  if (chartId) {
    (0, _utils.removeTooltip)(chartId);
  } else {
    (0, _utils.hideTooltips)(true);
  }

  _nvd3Fork.default.addGraph(drawGraph);
}

nvd3Vis.displayName = 'NVD3';
nvd3Vis.propTypes = propTypes;
var _default = nvd3Vis;
exports.default = _default;