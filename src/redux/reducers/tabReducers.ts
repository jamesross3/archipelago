/**
 * External
 */
import { combineReducers, TypedReducer } from "redoodle";

/**
 * Local
 */
import { TabActionTypes } from "../actions/tabActions";
import { ITabState, TABS } from "../state/tabState";

const tabIndexReducer = TypedReducer.builder<number>()
    .withHandler(TabActionTypes.CYCLE_TAB.TYPE, (state, _A) => (state + 1) % TABS.length)
    .withDefaultHandler((state = 0) => state)
    .build();

export const TAB_REDUCERS = combineReducers<ITabState>({
    tabIndex: tabIndexReducer,
});
