/**
 * External
 */
import { Classes, Icon, NonIdealState, Tab, Tabs } from "@blueprintjs/core";
import { IconName, IconNames } from "@blueprintjs/icons";
import * as classNames from "classnames";
import * as React from "react";
import { Mosaic, MosaicProps } from "react-mosaic-component";
import { connect } from "react-redux";

/**
 * Internal
 */
import { ContextType, getDispatchers } from "../redux/context/contextType";
import { IAppState } from "../redux/state/state";
import { CYCLE_INTERVAL, TabId, TABS } from "../redux/state/tabState";

/**
 * Local
 */
import { RootPane } from "./rootPane";

interface IRootContainerStateProps {
    tabIndex: number;
}

function mapStateToProps(state: IAppState): IRootContainerStateProps {
    return {
        tabIndex: state.tabState.tabIndex,
    };
}

const ICON_MAP: {[key: string]: IconName} = {
    [TabId.WEATHER]: IconNames.CLOUD,
    [TabId.STOCKS]: IconNames.CHART,
    [TabId.THIS_WEEK]: IconNames.CALENDAR,
};

class RootContainerClass extends React.Component<IRootContainerStateProps, {}> {

    public static contextTypes = ContextType;

    private tabDispatcher = getDispatchers(this.context).tabDispatcher;

    public componentDidMount() {
        this.poll();
    }

    public render() {
        return (
            <div className={classNames(Classes.DARK, "app-root")}>
                <Tabs id="cycling-tabs" selectedTabId={TABS[this.props.tabIndex]}>
                    {this.getTabs()}
                </Tabs>
            </div>
        );
    }

    private getTabs() {
        return TABS.map((tabId) => (
            <Tab
                id={tabId}
                key={tabId}
                panel={this.getTabIdContent(tabId)}
                title={this.getTabTitle(tabId)}
            />
        ));
    }

    private getTabTitle(tabId: string) {
        return (
            <div className="tab-title">
                <Icon icon={ICON_MAP[tabId]}/>
                {tabId}
            </div>
        );
    }

    private getTabIdContent(tabId: TabId) {
        return (
            <NonIdealState
                icon={ICON_MAP[tabId]}
                title={tabId}
            />
        );
    }

    private poll() {
        setTimeout(() => {
            this.tabDispatcher.cycleTab();
            this.poll();
        }, CYCLE_INTERVAL);
    }
}

export const RootContainer = connect<IRootContainerStateProps, {}, {}>(mapStateToProps) (RootContainerClass);
