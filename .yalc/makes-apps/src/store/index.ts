import makeActions from './actions';
import { AnyActionCoordinator } from './actions/coordinator';

type ActionType<COORDINATOR extends AnyActionCoordinator> = ReturnType<COORDINATOR['creator']['action']>;
type ActionTypes<ACTIONS extends { [key: string]: AnyActionCoordinator }> = ActionType<ACTIONS[keyof ACTIONS]>;

export * from './reducers';
export { ActionType, ActionTypes, makeActions };
