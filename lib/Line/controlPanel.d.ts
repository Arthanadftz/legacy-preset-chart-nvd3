/// <reference types="react" />
declare const _default: {
    controlPanelSections: ({
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
    } | {
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
        expanded: boolean;
        controlSetRows: (string[] | ({
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
        } | {
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: boolean;
                description: string;
            };
        })[] | {
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                choices: ["linear" | "basis" | "cardinal" | "monotone" | "step-before" | "step-after", string][];
                default: string;
                description: string;
            };
        }[])[];
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
    } | {
        label: string;
        expanded: boolean;
        controlSetRows: ((string | {
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: null[];
                description: string;
            };
        })[] | {
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: string;
            };
        }[] | {
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                default: boolean;
                description: string;
            };
        }[])[];
    })[];
    controlOverrides: {
        row_limit: {
            default: number;
        };
    };
    sectionOverrides: {
        druidTimeSeries: {
            controlSetRows: string[][];
        };
        sqlaTimeSeries: {
            controlSetRows: string[][];
        };
    };
};
export default _default;
//# sourceMappingURL=controlPanel.d.ts.map