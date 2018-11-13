/**
 * External
 */
import { combineReducers, Reducer } from "redoodle";

/**
 * Local
 */
import { IAppState } from "../state/state";
import { FOO_REDUCERS } from "./fooReducers";

export function getReducers(): Reducer<IAppState> {
    return combineReducers<IAppState>({
        fooState: FOO_REDUCERS,
    });
}
