"use strict";

exports.__esModule = true;
exports.default = transformProps;

var _isTruthy = _interopRequireDefault(require("./utils/isTruthy"));

var _tokenize = require("./utils/tokenize");

var _utils = require("./utils");

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
const NOOP = () => {};

const grabD3Format = (datasource, targetMetric) => {
  let foundFormatter;
  const {
    metrics = []
  } = datasource || {};
  metrics.forEach(metric => {
    if (metric.d3format && metric.metric_name === targetMetric) {
      foundFormatter = metric.d3format;
    }
  });
  return foundFormatter;
};

function transformProps(chartProps) {
  const {
    width,
    height,
    annotationData,
    datasource,
    formData,
    hooks,
    queryData
  } = chartProps;
  const {
    onAddFilter = NOOP,
    onError = NOOP
  } = hooks;
  const {
    annotationLayers,
    barStacked,
    bottomMargin,
    colorPicker,
    colorScheme,
    comparisonType,
    contribution,
    donut,
    entity,
    labelsOutside,
    leftMargin,
    lineInterpolation,
    maxBubbleSize,
    metric,
    metric2,
    metrics = [],
    orderBars,
    pieLabelType,
    reduceXTicks,
    richTooltip,
    sendTimeRange,
    showBarValue,
    showBrush,
    showControls,
    showLabels,
    showLegend,
    showMarkers,
    size,
    stackedStyle,
    vizType,
    x,
    xAxisFormat,
    xAxisLabel,
    xAxisShowminmax,
    xLogScale,
    xTicksLayout,
    y,
    yAxisBounds,
    yAxisLabel,
    yAxisShowminmax,
    yLogScale
  } = formData;
  let {
    markerLabels,
    markerLines,
    markerLineLabels,
    markers,
    numberFormat,
    rangeLabels,
    ranges,
    yAxisFormat,
    yAxis2Format
  } = formData;
  const rawData = queryData.data || [];
  const data = Array.isArray(rawData) ? rawData.map(row => ({ ...row,
    key: (0, _utils.formatLabel)(row.key, datasource.verboseMap)
  })) : rawData;

  if (vizType === 'pie') {
    numberFormat = numberFormat || grabD3Format(datasource, metric);
  } else if (vizType === 'dual_line') {
    yAxisFormat = yAxisFormat || grabD3Format(datasource, metric);
    yAxis2Format = yAxis2Format || grabD3Format(datasource, metric2);
  } else if (['line', 'dist_bar', 'bar', 'area'].includes(chartProps.formData.vizType)) {
    yAxisFormat = yAxisFormat || grabD3Format(datasource, metrics.length > 0 ? metrics[0] : undefined);
  } else if (vizType === 'bullet') {
    ranges = (0, _tokenize.tokenizeToNumericArray)(ranges) || [0, data.measures * 1.1];
    rangeLabels = (0, _tokenize.tokenizeToStringArray)(rangeLabels);
    markerLabels = (0, _tokenize.tokenizeToStringArray)(markerLabels);
    markerLines = (0, _tokenize.tokenizeToNumericArray)(markerLines);
    markerLineLabels = (0, _tokenize.tokenizeToStringArray)(markerLineLabels);
    markers = (0, _tokenize.tokenizeToNumericArray)(markers);
  }

  return {
    width,
    height,
    data,
    annotationData,
    annotationLayers,
    areaStackedStyle: stackedStyle,
    baseColor: colorPicker,
    bottomMargin,
    colorScheme,
    comparisonType,
    contribution,
    entity,
    isBarStacked: barStacked,
    isDonut: donut,
    isPieLabelOutside: labelsOutside,
    leftMargin,
    lineInterpolation,
    markerLabels,
    markerLines,
    markerLineLabels,
    markers,
    maxBubbleSize: parseInt(maxBubbleSize, 10),
    numberFormat,
    onBrushEnd: (0, _isTruthy.default)(sendTimeRange) ? timeRange => {
      onAddFilter('__time_range', timeRange, false, true);
    } : undefined,
    onError,
    orderBars,
    pieLabelType,
    rangeLabels,
    ranges,
    reduceXTicks,
    showBarValue,
    showBrush,
    showControls,
    showLabels,
    showLegend,
    showMarkers,
    sizeField: size,
    useRichTooltip: richTooltip,
    vizType,
    xAxisFormat,
    xAxisLabel,
    xAxisShowMinMax: xAxisShowminmax,
    xField: x,
    xIsLogScale: xLogScale,
    xTicksLayout,
    yAxisFormat,
    yAxis2Format,
    yAxisBounds,
    yAxisLabel,
    yAxisShowMinMax: yAxisShowminmax,
    yField: y,
    yIsLogScale: yLogScale
  };
}