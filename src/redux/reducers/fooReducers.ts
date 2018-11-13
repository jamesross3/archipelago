/**
 * External
 */
import { combineReducers, TypedReducer } from "redoodle";

/**
 * Local
 */
import { FooActionTypes } from "../actions/fooActions";
import { IFooState } from "../state/fooState";

const barReducer = TypedReducer.builder<string>()
    .withHandler(FooActionTypes.SET_BAR.TYPE, (_S, {bar}) => bar)
    .withDefaultHandler((state = "") => state)
    .build();

export const FOO_REDUCERS = combineReducers<IFooState>({
    bar: barReducer,
});
