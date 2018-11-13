/**
 * External
 */
import { Classes, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import * as React from "react";
import { connect } from "react-redux";
import { IAppState } from "../redux/state/state";

interface INavBarStateProps {
    bar: string;
}

function mapStateToProps(state: IAppState): INavBarStateProps {
    return {
        bar: state.fooState.bar,
    };
}

class NavBarClass extends React.PureComponent<INavBarStateProps, {}> {

    public render() {
        return (
            <div className={Classes.NAVBAR}>
                <Icon icon={IconNames.USER} iconSize={20}/>
                Hello, {this.props.bar}
            </div>
        );
    }
}

export const NavBar = connect(mapStateToProps)(NavBarClass) as React.ComponentClass<{}>;
