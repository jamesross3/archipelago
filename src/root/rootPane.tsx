/**
 * External
 */
import { NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import * as React from "react";

export class RootPane extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <div className="root-pane">
                <NonIdealState
                    description="Implement something here!"
                    title="Clean Slate"
                    icon={IconNames.CHEVRON_DOWN}
                />
            </div>
        );
    }
}
