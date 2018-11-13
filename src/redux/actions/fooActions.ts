/**
 * External
 */
import { TypedAction } from "redoodle";

const ACTION_PREFIX = "foo/";

function createFooAction<T>(action: string) {
    return TypedAction.define(`${ACTION_PREFIX}${action}`)<T>();
}

interface ISetBarPayload {
    bar: string;
}

export const FooActionTypes = {
    SET_BAR: createFooAction<ISetBarPayload>("SET_BAR"),
};

export const setBar = FooActionTypes.SET_BAR.create;
