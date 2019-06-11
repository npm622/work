import makeActions from './actions';
import { AnyActionCoordinator } from './actions/coordinator';
declare type ActionType<COORDINATOR extends AnyActionCoordinator> = ReturnType<COORDINATOR['creator']['action']>;
declare type ActionTypes<ACTIONS extends {
    [key: string]: AnyActionCoordinator;
}> = ActionType<ACTIONS[keyof ACTIONS]>;
export * from './utils';
export * from './reducers';
export * from './admin';
export * from './auth';
export * from './router';
export { ActionType, ActionTypes, makeActions };
