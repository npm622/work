import { Dispatch } from 'redux';
import { AlertParams, AlertOptions } from '../admin';
import { AnyAction } from './action';
import ActionCreator from './action_creator';
import { ActionStatus } from './action';

export interface ThunkActions {
  addAlert?: (...args: AlertParams) => AnyAction;
  startWork?: () => AnyAction;
  endWork?: () => AnyAction;
}

type AlertMessageAndOptions = { message: string } & AlertOptions;

export type OnSuccessHandler<ARGS extends any[], PAYLOAD> =
  | string
  | AlertMessageAndOptions
  | ((context: { args: ARGS; payload: PAYLOAD }) => string | AlertMessageAndOptions);

const buildSuccessAlert = <ARGS extends any[], PAYLOAD>(
  args: ARGS,
  payload: PAYLOAD,
  onSuccess?: OnSuccessHandler<ARGS, PAYLOAD>
): AlertParams => {
  const params: AlertParams = ['success', '', {}];
  if (onSuccess) {
    if (typeof onSuccess === 'string' || typeof onSuccess === 'object') {
      const parsed = parseStringOrOptions(onSuccess);
      if (parsed) {
        const [message, options] = parsed;
        params[1] = message;
        params[2] = options;
      }
      return params;
    }
    const parsed = parseStringOrOptions(onSuccess({ args, payload }));
    if (parsed) {
      const [message, options] = parsed;
      params[1] = message;
      params[2] = options;
    }
  }
  return params;
};

const parseStringOrOptions = (onSuccess: string | AlertMessageAndOptions): [string, AlertOptions] | undefined => {
  if (typeof onSuccess === 'string') {
    return [onSuccess, { displayForMillis: 3000 }];
  } else if (typeof onSuccess === 'object') {
    const { message, ...options } = onSuccess;
    return [message, options];
  }
  return;
};

export default class<TYPE extends string, ARGS extends any[], PAYLOAD, STATE extends {}, ARG extends {}> {
  constructor(
    public type: TYPE,
    private asyncAction: (
      ...args: ARGS
    ) => (dispatch: Dispatch<any>, getState: () => STATE, arg: ARG) => PAYLOAD | Promise<PAYLOAD>,
    private thunkActions: ThunkActions = {},
    private onSuccess?: OnSuccessHandler<ARGS, PAYLOAD>
  ) {}

  public worker = (...args: ARGS) => {
    const { addAlert = () => {}, startWork = () => {}, endWork = () => {} } = this.thunkActions;

    return async (dispatch: Dispatch<any>, getState: () => STATE, arg: ARG) => {
      dispatch(startWork());
      dispatch(this.action('starting', {}, ...args));
      try {
        const payload = await Promise.resolve(this.asyncAction(...args)(dispatch, getState, arg));
        dispatch(this.action('success', { payload }, ...args));
        dispatch(addAlert(...buildSuccessAlert(args, payload, this.onSuccess)));
        return payload;
      } catch (err) {
        dispatch(this.action('error', { err }, ...args));
        dispatch(addAlert('error', `${err.name}: ${err.message}`, { dismissable: true }));
        throw err;
      } finally {
        dispatch(this.action('finished', {}, ...args));
        dispatch(endWork());
      }
    };
  };

  public action = (stage: ActionStatus, { payload, err }: { payload?: PAYLOAD; err?: Error }, ...args: ARGS) => {
    switch (stage) {
      case 'starting':
        return this.actionOnStart(...args);
      case 'success':
        return this.actionOnSuccess(payload!, ...args);
      case 'error':
        return this.actionOnError(err!, ...args);
      case 'finished':
        return this.actionOnFinish(...args);
    }
    throw new Error(`unrecognized async stage: ${stage}`);
  };

  // TODO: in an "ideal fsa" world
  // https://github.com/Microsoft/TypeScript/issues/18758
  //
  // actionOnStart(...args: ARGS) {
  //   return {
  //     type: this.type as TYPE,
  //     error: false as false,
  //     payload: undefined,
  //     meta: { args, stage: 'on start' as 'on start' },
  //   };
  // }
  //
  // actionOnSuccess(payload: PAYLOAD, ...args: ARGS) {
  //   return {
  //     type: this.type as TYPE,
  //     error: false as false,
  //     payload: payload,
  //     meta: { args, stage: 'on success' as 'on success' },
  //   };
  // }
  //
  // actionOnError(err: Error, ...args: ARGS) {
  //   return {
  //     type: this.type as TYPE,
  //     error: true as true,
  //     payload: err,
  //     meta: { args, stage: 'on error' as 'on error' },
  //   };
  // }
  //
  // actionOnFinish(...args: ARGS) {
  //   return {
  //     type: this.type as TYPE,
  //     error: false as false,
  //     payload: undefined,
  //     meta: { args, stage: 'on finish' as 'on finish' },
  //   };
  // }

  private actionOnStart = (...args: ARGS) => {
    return new ActionCreator(this.type, 'starting', () => void 0, () => ({ args, time: Date.now() })).action();
    // return {
    //   type: this.type as TYPE,
    //   status: 'starting' as 'starting',
    //   payload: undefined,
    //   meta: { args, time: Date.now() },
    // } as Action<TYPE, undefined, ThunkMeta<ARGS>>;
  };

  private actionOnSuccess = (payload: PAYLOAD, ...args: ARGS) => {
    return new ActionCreator(
      this.type,
      'success',
      (payload: PAYLOAD) => payload,
      () => ({ args, time: Date.now() })
    ).action(payload);
    // return {
    //   type: this.type as TYPE,
    //   status: 'success' as 'success',
    //   payload: payload,
    //   meta: { args, time: Date.now() },
    // } as Action<TYPE, PAYLOAD, ThunkMeta<ARGS>>;
  };

  private actionOnError = (err: Error, ...args: ARGS) => {
    return new ActionCreator(
      this.type,
      'error',
      (payload: Error) => payload,
      () => ({ args, time: Date.now() })
    ).action(err);
    // return {
    //   type: this.type as TYPE,
    //   status: 'error' as 'error',
    //   payload: err,
    //   meta: { args, time: Date.now() },
    // } as Action<TYPE, Error, ThunkMeta<ARGS>>;
  };

  private actionOnFinish = (...args: ARGS) => {
    return new ActionCreator(this.type, 'finished', () => void 0, () => ({ args, time: Date.now() })).action();
    // return {
    //   type: this.type as TYPE,
    //   status: 'finished' as 'finished',
    //   payload: undefined,
    //   meta: { args, time: Date.now() },
    // } as Action<TYPE, undefined, ThunkMeta<ARGS>>;
  };
}
