import { Action, ActionStatus } from './action';
export declare const actionType: (namespace: string, type: string) => string;
export default class<TYPE extends string, STATUS extends ActionStatus, ARGS extends any[], PAYLOAD, META extends {}> {
    private namespace;
    type: TYPE;
    private status;
    private payloadCreator;
    private metaCreator;
    constructor(namespace: string, type: TYPE, status: STATUS, payloadCreator: (...args: ARGS) => PAYLOAD, metaCreator: () => META);
    action: (...args: ARGS) => Action<TYPE, STATUS, PAYLOAD, META>;
}
