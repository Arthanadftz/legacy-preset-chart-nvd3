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
import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import transformProps from '../transformProps';
import thumbnail from './images/thumbnail.png';
import { ANNOTATION_TYPES } from '../vendor/superset/AnnotationTypes';
import controlPanel from './controlPanel';
const metadata = new ChartMetadata({
  canBeAnnotationTypes: [ANNOTATION_TYPES.TIME_SERIES],
  credits: ['http://nvd3.org'],
  description: '',
  name: t('Line Chart'),
  supportedAnnotationTypes: [ANNOTATION_TYPES.TIME_SERIES, ANNOTATION_TYPES.INTERVAL, ANNOTATION_TYPES.EVENT, ANNOTATION_TYPES.FORMULA],
  thumbnail,
  useLegacyApi: true
});
export default class LineChartPlugin extends ChartPlugin {
  constructor() {
    super({
      loadChart: () => import('../ReactNVD3'),
      metadata,
      transformProps,
      controlPanel
    });
  }

}