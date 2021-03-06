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
/// <reference types="react" />
export declare const yAxis2Format: {
    name: string;
    config: {
        type: string;
        freeForm: boolean;
        label: string;
        default: string;
        choices: string[][];
        description: string;
    };
};
export declare const showMarkers: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: boolean;
        description: string;
    };
};
export declare const leftMargin: {
    name: string;
    config: {
        type: string;
        freeForm: boolean;
        clearable: boolean;
        label: string;
        choices: ["auto" | 50 | 75 | 100 | 125 | 150 | 200, string][];
        default: string;
        renderTrigger: boolean;
        description: string;
    };
};
export declare const yAxisShowMinmax: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: boolean;
        description: string;
    };
};
export declare const lineInterpolation: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        choices: ["linear" | "basis" | "cardinal" | "monotone" | "step-before" | "step-after", string][];
        default: string;
        description: string;
    };
};
export declare const showBrush: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        clearable: boolean;
        default: string;
        choices: string[][];
        description: string;
    };
};
export declare const showLegend: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: boolean;
        description: string;
    };
};
export declare const showControls: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: boolean;
        description: string;
    };
};
export declare const xAxisLabel: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: string;
    };
};
export declare const bottomMargin: {
    name: string;
    config: {
        type: string;
        clearable: boolean;
        freeForm: boolean;
        label: string;
        choices: ["auto" | 50 | 75 | 100 | 125 | 150 | 200, string][];
        default: string;
        renderTrigger: boolean;
        description: string;
    };
};
export declare const xTicksLayout: {
    name: string;
    config: {
        type: string;
        label: string;
        choices: ["auto" | "flat" | "45??" | "staggered", string][];
        default: string;
        clearable: boolean;
        renderTrigger: boolean;
        description: string;
    };
};
export declare const xAxisFormat: {
    name: string;
    config: {
        type: string;
        freeForm: boolean;
        label: string;
        renderTrigger: boolean;
        choices: string[][];
        default: string;
        description: string;
    };
};
export declare const yLogScale: {
    name: string;
    config: {
        type: string;
        label: string;
        default: boolean;
        renderTrigger: boolean;
        description: string;
    };
};
export declare const yAxisBounds: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: null[];
        description: string;
    };
};
export declare const xAxisShowMinmax: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: boolean;
        description: string;
    };
};
export declare const richTooltip: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: boolean;
        description: string;
    };
};
export declare const showBarValue: {
    name: string;
    config: {
        type: string;
        label: string;
        default: boolean;
        renderTrigger: boolean;
        description: string;
    };
};
export declare const barStacked: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: boolean;
        description: null;
    };
};
export declare const reduceXTicks: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: boolean;
        description: string;
    };
};
export declare const yAxisLabel: {
    name: string;
    config: {
        type: string;
        label: string;
        renderTrigger: boolean;
        default: string;
    };
};
export declare const timeSeriesSection: ({
    label: string;
    expanded: boolean;
    controlSetRows: ((string | null)[] | {
        name: string;
        config: {
            type: string;
            label: string;
            default: boolean;
            description: string;
        };
    }[])[];
    tabOverride?: undefined;
    description?: undefined;
} | {
    label: string;
    tabOverride: string;
    description: string;
    controlSetRows: (JSX.Element[] | ({
        name: string;
        config: {
            type: string;
            label: string;
            default: string;
            choices: ["None" | "mean" | "sum" | "std" | "cumsum", string][];
            description: string;
            isInt?: undefined;
        };
    } | {
        name: string;
        config: {
            type: string;
            label: string;
            isInt: boolean;
            description: string;
            default?: undefined;
            choices?: undefined;
        };
    })[] | ({
        name: string;
        config: {
            type: string;
            multi: boolean;
            freeForm: boolean;
            label: string;
            choices: ["1 day" | "1 week" | "28 days" | "30 days" | "52 weeks" | "1 year" | "104 weeks" | "2 years", string][];
            description: string;
            default?: undefined;
        };
    } | {
        name: string;
        config: {
            type: string;
            label: string;
            default: string;
            choices: string[][];
            description: string;
            multi?: undefined;
            freeForm?: undefined;
        };
    })[] | ({
        name: string;
        config: {
            type: string;
            freeForm: boolean;
            label: string;
            default: null;
            choices: ["1T" | "1H" | "1D" | "7D" | "1M" | "1AS", string][];
            description: string;
        };
    } | {
        name: string;
        config: {
            type: string;
            freeForm: boolean;
            label: string;
            default: null;
            choices: ["mean" | "sum" | "asfreq" | "bfill" | "ffill" | "median", string][];
            description: string;
        };
    })[])[];
    expanded?: undefined;
})[];
//# sourceMappingURL=NVD3Controls.d.ts.map