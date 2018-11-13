/**
 * Local
 */
import { IFooState, INITIAL_FOO } from "./fooState";

export interface IAppState {
    fooState: IFooState;
}

export const INITIAL_STATE: IAppState = {
    fooState: INITIAL_FOO,
};
