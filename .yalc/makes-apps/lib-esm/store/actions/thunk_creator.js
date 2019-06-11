"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const action_creator_1 = tslib_1.__importDefault(require("./action_creator"));
const buildSuccessAlert = (args, payload, onSuccess) => {
    const params = ['success', '', {}];
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
const parseStringOrOptions = (onSuccess) => {
    if (typeof onSuccess === 'string') {
        return [onSuccess, { displayForMillis: 3000 }];
    }
    else if (typeof onSuccess === 'object') {
        const { message } = onSuccess, options = tslib_1.__rest(onSuccess, ["message"]);
        return [message, options];
    }
    return;
};
class default_1 {
    constructor(namespace, type, asyncAction, thunkActions = {}, onSuccess) {
        this.namespace = namespace;
        this.type = type;
        this.asyncAction = asyncAction;
        this.thunkActions = thunkActions;
        this.onSuccess = onSuccess;
        this.worker = (...args) => {
            const { addAlert = () => { }, startWork = () => { }, endWork = () => { } } = this.thunkActions;
            return (dispatch, getState, arg) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                dispatch(startWork());
                dispatch(this.action('starting', {}, ...args));
                try {
                    const payload = yield Promise.resolve(this.asyncAction(...args)(dispatch, getState, arg));
                    dispatch(this.action('success', { payload }, ...args));
                    dispatch(addAlert(...buildSuccessAlert(args, payload, this.onSuccess)));
                    return payload;
                }
                catch (err) {
                    dispatch(this.action('error', { err }, ...args));
                    dispatch(addAlert('error', `${err.name}: ${err.message}`, { dismissable: true }));
                    throw err;
                }
                finally {
                    dispatch(this.action('finished', {}, ...args));
                    dispatch(endWork());
                }
            });
        };
        this.action = (stage, { payload, err }, ...args) => {
            switch (stage) {
                case 'starting':
                    return this.actionOnStart(...args);
                case 'success':
                    return this.actionOnSuccess(payload, ...args);
                case 'error':
                    return this.actionOnError(err, ...args);
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
        this.actionOnStart = (...args) => {
            return new action_creator_1.default(this.namespace, this.type, 'starting', () => void 0, () => ({ args, time: Date.now() })).action();
            // return {
            //   type: this.type as TYPE,
            //   status: 'starting' as 'starting',
            //   payload: undefined,
            //   meta: { args, time: Date.now() },
            // } as Action<TYPE, undefined, ThunkMeta<ARGS>>;
        };
        this.actionOnSuccess = (payload, ...args) => {
            return new action_creator_1.default(this.namespace, this.type, 'success', (payload) => payload, () => ({ args, time: Date.now() })).action(payload);
            // return {
            //   type: this.type as TYPE,
            //   status: 'success' as 'success',
            //   payload: payload,
            //   meta: { args, time: Date.now() },
            // } as Action<TYPE, PAYLOAD, ThunkMeta<ARGS>>;
        };
        this.actionOnError = (err, ...args) => {
            return new action_creator_1.default(this.namespace, this.type, 'error', (payload) => payload, () => ({ args, time: Date.now() })).action(err);
            // return {
            //   type: this.type as TYPE,
            //   status: 'error' as 'error',
            //   payload: err,
            //   meta: { args, time: Date.now() },
            // } as Action<TYPE, Error, ThunkMeta<ARGS>>;
        };
        this.actionOnFinish = (...args) => {
            return new action_creator_1.default(this.namespace, this.type, 'finished', () => void 0, () => ({ args, time: Date.now() })).action();
            // return {
            //   type: this.type as TYPE,
            //   status: 'finished' as 'finished',
            //   payload: undefined,
            //   meta: { args, time: Date.now() },
            // } as Action<TYPE, undefined, ThunkMeta<ARGS>>;
        };
    }
}
exports.default = default_1;
//# sourceMappingURL=thunk_creator.js.map