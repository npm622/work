"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var action_creator_1 = tslib_1.__importDefault(require("./action_creator"));
var buildSuccessAlert = function (args, payload, onSuccess) {
    var params = ['success', '', {}];
    if (onSuccess) {
        if (typeof onSuccess === 'string' || typeof onSuccess === 'object') {
            var parsed_1 = parseStringOrOptions(onSuccess);
            if (parsed_1) {
                var message = parsed_1[0], options = parsed_1[1];
                params[1] = message;
                params[2] = options;
            }
            return params;
        }
        var parsed = parseStringOrOptions(onSuccess({ args: args, payload: payload }));
        if (parsed) {
            var message = parsed[0], options = parsed[1];
            params[1] = message;
            params[2] = options;
        }
    }
    return params;
};
var parseStringOrOptions = function (onSuccess) {
    if (typeof onSuccess === 'string') {
        return [onSuccess, { displayForMillis: 3000 }];
    }
    else if (typeof onSuccess === 'object') {
        var message = onSuccess.message, options = tslib_1.__rest(onSuccess, ["message"]);
        return [message, options];
    }
    return;
};
var default_1 = /** @class */ (function () {
    function default_1(namespace, type, asyncAction, thunkActions, onSuccess) {
        var _this = this;
        if (thunkActions === void 0) { thunkActions = {}; }
        this.namespace = namespace;
        this.type = type;
        this.asyncAction = asyncAction;
        this.thunkActions = thunkActions;
        this.onSuccess = onSuccess;
        this.worker = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a = _this.thunkActions, _b = _a.addAlert, addAlert = _b === void 0 ? function () { } : _b, _c = _a.startWork, startWork = _c === void 0 ? function () { } : _c, _d = _a.endWork, endWork = _d === void 0 ? function () { } : _d;
            return function (dispatch, getState, arg) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var payload, err_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dispatch(startWork());
                            dispatch(this.action.apply(this, ['starting', {}].concat(args)));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            return [4 /*yield*/, Promise.resolve(this.asyncAction.apply(this, args)(dispatch, getState, arg))];
                        case 2:
                            payload = _a.sent();
                            dispatch(this.action.apply(this, ['success', { payload: payload }].concat(args)));
                            dispatch(addAlert.apply(void 0, buildSuccessAlert(args, payload, this.onSuccess)));
                            return [2 /*return*/, payload];
                        case 3:
                            err_1 = _a.sent();
                            dispatch(this.action.apply(this, ['error', { err: err_1 }].concat(args)));
                            dispatch(addAlert('error', err_1.name + ": " + err_1.message, { dismissable: true }));
                            throw err_1;
                        case 4:
                            dispatch(this.action.apply(this, ['finished', {}].concat(args)));
                            dispatch(endWork());
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            }); };
        };
        this.action = function (stage, _a) {
            var payload = _a.payload, err = _a.err;
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            switch (stage) {
                case 'starting':
                    return _this.actionOnStart.apply(_this, args);
                case 'success':
                    return _this.actionOnSuccess.apply(_this, [payload].concat(args));
                case 'error':
                    return _this.actionOnError.apply(_this, [err].concat(args));
                case 'finished':
                    return _this.actionOnFinish.apply(_this, args);
            }
            throw new Error("unrecognized async stage: " + stage);
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
        this.actionOnStart = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new action_creator_1.default(_this.namespace, _this.type, 'starting', function () { return void 0; }, function () { return ({ args: args, time: Date.now() }); }).action();
            // return {
            //   type: this.type as TYPE,
            //   status: 'starting' as 'starting',
            //   payload: undefined,
            //   meta: { args, time: Date.now() },
            // } as Action<TYPE, undefined, ThunkMeta<ARGS>>;
        };
        this.actionOnSuccess = function (payload) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new action_creator_1.default(_this.namespace, _this.type, 'success', function (payload) { return payload; }, function () { return ({ args: args, time: Date.now() }); }).action(payload);
            // return {
            //   type: this.type as TYPE,
            //   status: 'success' as 'success',
            //   payload: payload,
            //   meta: { args, time: Date.now() },
            // } as Action<TYPE, PAYLOAD, ThunkMeta<ARGS>>;
        };
        this.actionOnError = function (err) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new action_creator_1.default(_this.namespace, _this.type, 'error', function (payload) { return payload; }, function () { return ({ args: args, time: Date.now() }); }).action(err);
            // return {
            //   type: this.type as TYPE,
            //   status: 'error' as 'error',
            //   payload: err,
            //   meta: { args, time: Date.now() },
            // } as Action<TYPE, Error, ThunkMeta<ARGS>>;
        };
        this.actionOnFinish = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new action_creator_1.default(_this.namespace, _this.type, 'finished', function () { return void 0; }, function () { return ({ args: args, time: Date.now() }); }).action();
            // return {
            //   type: this.type as TYPE,
            //   status: 'finished' as 'finished',
            //   payload: undefined,
            //   meta: { args, time: Date.now() },
            // } as Action<TYPE, undefined, ThunkMeta<ARGS>>;
        };
    }
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=thunk_creator.js.map