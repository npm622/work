"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var action_creator_1 = tslib_1.__importDefault(require("./action_creator"));
var coordinator_1 = tslib_1.__importDefault(require("./coordinator"));
var thunk_creator_1 = tslib_1.__importDefault(require("./thunk_creator"));
exports.default = (function (thunkActions) { return ({
    forNamespace: function (namespace) { return ({
        withType: function (type) { return ({
            withoutPayload: function (metaCreator) {
                if (metaCreator === void 0) { metaCreator = (function () { return ({}); }); }
                var actionCreator = new action_creator_1.default(namespace, type, '', function () { return ({}); }, metaCreator);
                return new coordinator_1.default(actionCreator);
            },
            withPayload: function (metaCreator) {
                if (metaCreator === void 0) { metaCreator = (function () { return ({}); }); }
                var actionCreator = new action_creator_1.default(namespace, type, '', function (payload) { return payload; }, metaCreator);
                return new coordinator_1.default(actionCreator);
            },
            withArgs: function (payloadCreator, metaCreator) {
                if (metaCreator === void 0) { metaCreator = (function () { return ({}); }); }
                var actionCreator = new action_creator_1.default(namespace, type, '', payloadCreator, metaCreator);
                return new coordinator_1.default(actionCreator);
            },
            asThunk: function (asyncAction, onSuccess) {
                var thunkCreator = new thunk_creator_1.default(namespace, type, asyncAction, thunkActions, onSuccess);
                return new coordinator_1.default(thunkCreator);
            },
        }); },
    }); },
}); });
//# sourceMappingURL=index.js.map