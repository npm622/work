import { Dispatch } from 'redux';
import { AlertParams, AlertOptions } from '../admin';
import { AnyAction } from './action';
export interface ThunkActions {
    addAlert?: (...args: AlertParams) => AnyAction;
    startWork?: () => AnyAction;
    endWork?: () => AnyAction;
}
declare type AlertMessageAndOptions = {
    message: string;
} & AlertOptions;
export declare type OnSuccessHandler<ARGS extends any[], PAYLOAD> = string | AlertMessageAndOptions | ((context: {
    args: ARGS;
    payload: PAYLOAD;
}) => string | AlertMessageAndOptions);
export default class<TYPE extends string, ARGS extends any[], PAYLOAD, STATE extends {}, ARG extends {}> {
    private namespace;
    type: TYPE;
    private asyncAction;
    private thunkActions;
    private onSuccess?;
    constructor(namespace: string, type: TYPE, asyncAction: (...args: ARGS) => (dispatch: Dispatch<any>, getState: () => STATE, arg: ARG) => PAYLOAD | Promise<PAYLOAD>, thunkActions?: ThunkActions, onSuccess?: string | AlertMessageAndOptions | ((context: {
        args: ARGS;
        payload: PAYLOAD;
    }) => string | AlertMessageAndOptions) | undefined);
    worker: (...args: ARGS) => (dispatch: Dispatch<any>, getState: () => STATE, arg: ARG) => Promise<PAYLOAD>;
    action: (stage: import("../../../lib-esm/store/actions/action").ActionStatus, { payload, err }: {
        payload?: PAYLOAD | undefined;
        err?: Error | undefined;
    }, ...args: ARGS) => import("./action").Action<TYPE, "starting", undefined, {
        args: ARGS;
        time: number;
    }> | import("./action").Action<TYPE, "success", PAYLOAD, {
        args: ARGS;
        time: number;
    }> | import("./action").Action<TYPE, "error", Error, {
        args: ARGS;
        time: number;
    }> | import("./action").Action<TYPE, "finished", undefined, {
        args: ARGS;
        time: number;
    }>;
    private actionOnStart;
    private actionOnSuccess;
    private actionOnError;
    private actionOnFinish;
}
export {};
