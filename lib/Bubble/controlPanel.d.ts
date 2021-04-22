declare const _default: {
    label: string;
    controlPanelSections: ({
        label: string;
        expanded: boolean;
        controlSetRows: ((string | null)[] | {
            name: string;
            config: {
                type: string;
                freeForm: boolean;
                label: string;
                default: string;
                choices: ["25" | "5" | "10" | "15" | "50" | "75" | "100", string][];
            };
        }[])[];
        tabOverride?: undefined;
    } | {
        label: string;
        expanded: boolean;
        tabOverride: string;
        controlSetRows: (string[] | ({
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
        tabOverride: string;
        controlSetRows: ({
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
        tabOverride: string;
        controlSetRows: ((string | null)[] | {
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
        color_scheme: {
            renderTrigger: boolean;
        };
    };
};
export default _default;
//# sourceMappingURL=controlPanel.d.ts.map