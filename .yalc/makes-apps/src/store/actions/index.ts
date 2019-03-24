import { Dispatch } from 'redux';
import ActionCreator from './action_creator';
import ActionCoordinator from './coordinator';
import ThunkCreator, { ThunkActions, OnSuccessHandler } from './thunk_creator';

export default <APP_STATE = {}, THUNK_ARG = {}>(thunkActions?: ThunkActions) => ({
  forNamespace: <LOCAL_STATE extends {}>(_namespace: string) => ({
    withType: <TYPE extends string>(type: TYPE) => {
      // const type = `${namespace} ${actionType}`;

      return {
        withoutPayload: <META = {}>(metaCreator = (() => ({})) as () => META) => {
          const actionCreator = new ActionCreator<TYPE, '', [], {}, META>(type, '', () => ({}), metaCreator);
          return new ActionCoordinator<LOCAL_STATE, typeof actionCreator>(actionCreator);
        },

        withPayload: <PAYLOAD, META = {}>(metaCreator = (() => ({})) as () => META) => {
          const actionCreator = new ActionCreator<TYPE, '', [PAYLOAD], PAYLOAD, META>(
            type,
            '',
            payload => payload,
            metaCreator
          );
          return new ActionCoordinator<LOCAL_STATE, typeof actionCreator>(actionCreator);
        },

        withArgs: <ARGS extends any[], PAYLOAD, META = {}>(
          payloadCreator: (...args: ARGS) => PAYLOAD,
          metaCreator = (() => ({})) as () => META
        ) => {
          const actionCreator = new ActionCreator<TYPE, '', ARGS, PAYLOAD, META>(type, '', payloadCreator, metaCreator);
          return new ActionCoordinator<LOCAL_STATE, typeof actionCreator>(actionCreator);
        },

        asThunk: <ARGS extends any[], PAYLOAD>(
          asyncAction: (
            ...args: ARGS
          ) => (dispatch: Dispatch<any>, getState: () => APP_STATE, arg: THUNK_ARG) => PAYLOAD | Promise<PAYLOAD>,
          onSuccess?: OnSuccessHandler<ARGS, PAYLOAD>
        ) => {
          const thunkCreator = new ThunkCreator<TYPE, ARGS, PAYLOAD, APP_STATE, THUNK_ARG>(
            type,
            asyncAction,
            thunkActions,
            onSuccess
          );
          return new ActionCoordinator<LOCAL_STATE, typeof thunkCreator>(thunkCreator);
        },
      };
    },
  }),
});
