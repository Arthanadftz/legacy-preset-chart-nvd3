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
declare const _default: {
    controlPanelSections: ({
        label: string;
        expanded: boolean;
        controlSetRows: (string[] | {
            name: string;
            config: {
                type: string;
                label: string;
                default: boolean;
                description: string;
            };
        }[])[];
    } | {
        label: string;
        expanded: boolean;
        controlSetRows: ((string | {
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: string;
            };
        })[] | ({
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: boolean;
                description: string;
            };
        } | null)[] | ({
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: boolean;
                description: null;
            };
        } | {
            name: string;
            config: {
                type: string;
                label: string;
                default: boolean;
                renderTrigger: boolean;
                description: string;
            };
        })[])[];
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
                choices: ["auto" | "flat" | "45°" | "staggered", string][];
                default: string;
                clearable: boolean;
                renderTrigger: boolean;
                description: string;
            };
        } | {
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: boolean;
                description: string;
            };
        })[])[];
    })[];
    controlOverrides: {
        groupby: {
            label: string;
            validators: (typeof validateNonEmpty)[];
        };
        columns: {
            label: string;
            description: string;
        };
    };
};
export default _default;
//# sourceMappingURL=controlPanel.d.ts.map