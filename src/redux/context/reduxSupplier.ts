/**
 * External
 */
import { createStore, Store } from "redoodle";
import { applyMiddleware, compose } from "redux";
import { default as thunk } from "redux-thunk";

/**
 * Internal
 */
import { getReducers } from "../reducers/reducers";
import { IAppState, INITIAL_STATE } from "../state/state";

export const getReduxStore = (): Store<IAppState> =>
    createStore(getReducers(), INITIAL_STATE, compose<any>(applyMiddleware(thunk))) as Store<IAppState>;
