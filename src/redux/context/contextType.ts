/**
 * External
 */
import { object, ValidationMap } from "prop-types";
import * as React from "react";
import { TabDispatcher } from "../dispatchers/tabDispatcher";

export interface IDispatcherContext {
    tabDispatcher: TabDispatcher;
}

export interface IContextType {
    dispatchers: IDispatcherContext;
}

export const ContextType: ValidationMap<any> = {
    dispatchers: object.isRequired,
};

const getContext = (context: any): IContextType => context as IContextType;

export const getDispatchers = (context: any) => getContext(context).dispatchers;
