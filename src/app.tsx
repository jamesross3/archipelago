/**
 * External
 */
import { Classes, FocusStyleManager } from "@blueprintjs/core";
import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";

/**
 * Internal
 */
import { ContextProvider } from "./redux/context/contextProvider";
import { createReduxController } from "./redux/context/reduxController";
import { getReduxStore } from "./redux/context/reduxSupplier";
import { RootContainer } from "./root/rootContainer";

FocusStyleManager.onlyShowFocusOnTabs();
const allowPaste = (event: Event): boolean => {
    event.stopImmediatePropagation();
    return true;
};
document.addEventListener("paste", allowPaste, true);

const store = getReduxStore();
const reduxController = createReduxController(store);

ReactDom.render(
    <Provider store={store}>
        <ContextProvider
            fooDispatcher={reduxController.getFooDispatcher()}
        >
            <RootContainer/>
        </ContextProvider>
    </Provider>,
    document.getElementById("app"),
);
