import React from 'react';
import { Reducer, Store } from 'redux';
import { IconDefinition, IconPack } from '@fortawesome/fontawesome-svg-core';
import { History } from 'history';
export default class<STATE extends {} = {}> {
    private initialState;
    private middlewares;
    constructor(initialState: STATE, ...icons: (IconDefinition | IconPack)[]);
    createHistory(historySupplier?: (windowPresent: boolean) => History<any>): History<any>;
    createStore<ARG extends {}>(rootReducer: Reducer, extraArg?: ARG): Store<any, import("redux").AnyAction> & {
        dispatch: {};
    };
    private composeEnhancers;
    private setupLoggerMiddleware;
    createRenderer(history: History, store: Store, documentId: string): (Component: React.ComponentType<any>) => void;
}
