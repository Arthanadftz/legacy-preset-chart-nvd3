declare const _default: {
    controlPanelSections: ({
        label: string;
        expanded: boolean;
        controlSetRows: (string[] | {
            name: string;
            config: {
                type: string;
                label: string;
                default: string;
                freeForm: boolean;
                clearable: boolean;
                choices: string[][];
                description: string;
                tooltipOnClick: () => void;
            };
        }[])[];
    } | {
        label: string;
        expanded: boolean;
        controlSetRows: ((string | null)[] | ({
            name: string;
            config: {
                type: string;
                label: string;
                renderTrigger: boolean;
                choices: ["linear" | "basis" | "cardinal" | "monotone" | "step-before" | "step-after", string][];
                default: string;
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
        } | {
            name: string;
            config: {
                default: string;
                choices: string[][];
                type: string;
                freeForm: boolean;
                label: string;
                renderTrigger: boolean;
                description: string;
            };
        })[])[];
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
        metric: {
            clearable: boolean;
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