/**
 * External
 */
import { Classes } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";

/**
 * Local
 */
import { NavBar } from "./navBar";
import { RootPane } from "./rootPane";

export class RootContainer extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <div className={classNames(Classes.DARK, "app-root")}>
                <NavBar/>
                <RootPane/>
            </div>
        );
    }
}
