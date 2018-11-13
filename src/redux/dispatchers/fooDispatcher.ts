/**
 * External
 */
import { Action, Dispatch } from "redoodle";

/**
 * Local
 */
import { setBar } from "../actions/fooActions";
import { IFooState } from "../state/fooState";
import { IAppState } from "../state/state";

export class FooDispatcher {

    constructor(private dispatch: Dispatch) {}

    public setBar(bar: string) {
        this.dispatch(setBar({bar}));
    }
}
