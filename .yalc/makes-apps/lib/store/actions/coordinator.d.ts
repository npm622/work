import { AnyAction } from './action';
export declare type AnyActionCoordinator = ActionCoordinator<any, {
    action: any;
}>;
declare class ActionCoordinator<STATE extends {}, ACTION_CREATOR extends {
    action: any;
}> {
    creator: ACTION_CREATOR;
    reducer: (state: STATE, action: ReturnType<ACTION_CREATOR['action']>) => STATE;
    constructor(creator: ACTION_CREATOR);
    handleAction: (state: STATE, action: AnyAction) => STATE;
    withReducer: (reducer: (state: STATE, action: ReturnType<ACTION_CREATOR["action"]>) => STATE) => this;
}
export default ActionCoordinator;
