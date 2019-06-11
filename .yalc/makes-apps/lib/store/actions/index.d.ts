import { Dispatch } from 'redux';
import ActionCreator from './action_creator';
import ActionCoordinator from './coordinator';
import ThunkCreator, { ThunkActions } from './thunk_creator';
declare const _default: <APP_STATE = {}, THUNK_ARG = {}>(thunkActions?: ThunkActions | undefined) => {
    forNamespace: <LOCAL_STATE extends {}>(namespace: string) => {
        withType: <TYPE extends string>(type: TYPE) => {
            withoutPayload: <META = {}>(metaCreator?: () => META) => ActionCoordinator<LOCAL_STATE, ActionCreator<TYPE, "", [], {}, META>>;
            withPayload: <PAYLOAD, META = {}>(metaCreator?: () => META) => ActionCoordinator<LOCAL_STATE, ActionCreator<TYPE, "", [PAYLOAD], PAYLOAD, META>>;
            withArgs: <ARGS extends any[], PAYLOAD, META = {}>(payloadCreator: (...args: ARGS) => PAYLOAD, metaCreator?: () => META) => ActionCoordinator<LOCAL_STATE, ActionCreator<TYPE, "", ARGS, PAYLOAD, META>>;
            asThunk: <ARGS extends any[], PAYLOAD>(asyncAction: (...args: ARGS) => (dispatch: Dispatch<any>, getState: () => APP_STATE, arg: THUNK_ARG) => PAYLOAD | Promise<PAYLOAD>, onSuccess?: string | ({
                message: string;
            } & import("..").AlertOptions) | ((context: {
                args: ARGS;
                payload: PAYLOAD;
            }) => string | ({
                message: string;
            } & import("..").AlertOptions)) | undefined) => ActionCoordinator<LOCAL_STATE, ThunkCreator<TYPE, ARGS, PAYLOAD, APP_STATE, THUNK_ARG>>;
        };
    };
};
export default _default;
