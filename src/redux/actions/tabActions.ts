/**
 * External
 */
import { TypedAction } from "redoodle";

const ACTION_PREFIX = "tab/";

function createTabAction<T>(action: string) {
    return TypedAction.define(`${ACTION_PREFIX}${action}`)<T>();
}

export const TabActionTypes = {
    CYCLE_TAB: createTabAction<{}>("CYCLE_TAB"),
};

export const cycleTab = TabActionTypes.CYCLE_TAB.create;
