/**
 * External
 */
import { combineReducers, Reducer } from "redoodle";

/**
 * Local
 */
import { IAppState } from "../state/state";
import { TAB_REDUCERS } from "./tabReducers";

export function getReducers(): Reducer<IAppState> {
    return combineReducers<IAppState>({
        tabState: TAB_REDUCERS,
    });
}
