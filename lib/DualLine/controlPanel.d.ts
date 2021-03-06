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
        expanded: boolean;
        controlSetRows: (string | {
            name: string;
            config: {
                type: string;
                freeForm: boolean;
                label: string;
                default: string;
                choices: string[][];
                description: string;
            };
        })[][];
    })[];
    controlOverrides: {
        metric: {
            label: string;
            description: string;
        };
        y_axis_format: {
            label: string;
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