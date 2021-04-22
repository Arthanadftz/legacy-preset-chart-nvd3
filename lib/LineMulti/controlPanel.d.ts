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
import { validateNonEmpty } from '@superset-ui/core';
export declare type Result = {
    id: unknown;
    slice_name: string;
};
export declare type Data = {
    result?: Result[];
};
declare const _default: {
    controlPanelSections: ({
        label: string;
        tabOverride: string;
        expanded: boolean;
        controlSetRows: {
            name: string;
            config: {
                type: string;
                label: string;
                default: never[];
                description: string;
                renderTrigger: boolean;
            };
        }[][];
    } | {
        label: string;
        tabOverride: string;
        expanded: boolean;
        controlSetRows: (string[] | {
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: boolean;
                description: string;
            };
        }[] | ({
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                choices: ["linear" | "basis" | "cardinal" | "monotone" | "step-before" | "step-after", string][];
                default: string;
                description: string;
            };
        } | null)[] | ({
            name: string;
            config: {
                type: string;
                label: string;
                default: boolean;
                renderTrigger: boolean;
            };
        } | null)[])[];
    } | {
        label: string;
        expanded: boolean;
        controlSetRows: ({
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: string;
            };
        }[] | ({
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: boolean;
                description: string;
            };
        } | null)[])[];
        tabOverride?: undefined;
    } | {
        label: string;
        expanded: boolean;
        controlSetRows: (string | {
            name: string;
            config: {
                type: string;
                multi: boolean;
                label: string;
                validators: (typeof validateNonEmpty)[];
                default: never[];
                description: string;
                dataEndpoint: string;
                placeholder: string;
                onAsyncErrorMessage: string;
                mutator: (data?: Data | undefined) => {
                    value: unknown;
                    label: string;
                }[];
            };
        })[][];
        tabOverride?: undefined;
    } | {
        label: string;
        expanded: boolean;
        controlSetRows: ({
            name: string;
            config: {
                type: string;
                freeForm: boolean;
                label: string;
                default: string;
                choices: string[][];
                description: string;
            };
        } | {
            name: string;
            config: {
                type: string;
                multi: boolean;
                label: string;
                validators: never[];
                default: never[];
                description: string;
                dataEndpoint: string;
                placeholder: string;
                onAsyncErrorMessage: string;
                mutator: (data: Data) => {
                    value: unknown;
                    label: string;
                }[];
            };
        })[][];
        tabOverride?: undefined;
    })[];
    controlOverrides: {
        y_axis_format: {
            label: string;
        };
    };
    sectionOverrides: {
        sqlaTimeSeries: {
            controlSetRows: string[][];
        };
        druidTimeSeries: {
            controlSetRows: string[][];
        };
    };
};
export default _default;
//# sourceMappingURL=controlPanel.d.ts.map