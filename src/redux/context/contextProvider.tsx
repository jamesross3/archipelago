/**
 * External
 */
import * as React from "react";

/**
 * Internal
 */
import { ContextType, IContextType, IDispatcherContext } from "./contextType";

export type ContextProviderProps = IDispatcherContext & React.Props<JSX.IntrinsicAttributes>;

export class ContextProvider extends React.PureComponent<ContextProviderProps, {}> {

    public static childContextTypes = ContextType;

    public getChildContext(): IContextType {
        return {
            dispatchers: {
                tabDispatcher: this.props.tabDispatcher,
            },
        };
    }

    public render() {
        return React.Children.only(this.props.children);
    }

}
