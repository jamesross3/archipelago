/**
 * Local
 */
import { INITIAL_TAB_STATE, ITabState } from "./tabState";

export interface IAppState {
    tabState: ITabState;
}

export const INITIAL_STATE: IAppState = {
    tabState: INITIAL_TAB_STATE,
};
