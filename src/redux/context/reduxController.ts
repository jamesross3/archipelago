/**
 * External
 */
import { Dispatch } from "redoodle";
import { Action, Store } from "redux";

/**
 * Internal
 */
import { FooDispatcher } from "../dispatchers/fooDispatcher";
import { IAppState } from "../state/state";

let reduxController: ReduxController;

export function getReduxController(): ReduxController {
    return reduxController;
}

export function createReduxController(store: Store<IAppState>): ReduxController {
    reduxController = new ReduxController(store);
    return reduxController;
}

class ReduxController {

    constructor(private store: Store<IAppState>) {}

    public getFooDispatcher(): FooDispatcher  {
        return new FooDispatcher(this.getDispatch());
    }

    private getDispatch = (): Dispatch => this.store.dispatch.bind(this.store);

}
