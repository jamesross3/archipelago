/**
 * External
 */
import { Action, Dispatch } from "redoodle";

/**
 * Local
 */
import { cycleTab } from "../actions/tabActions";
import { IAppState } from "../state/state";
import { ITabState } from "../state/tabState";

export class TabDispatcher {

    constructor(private dispatch: Dispatch) {
        this.cycleTab();
    }

    public cycleTab() {
        this.dispatch(cycleTab({}));
    }
}
