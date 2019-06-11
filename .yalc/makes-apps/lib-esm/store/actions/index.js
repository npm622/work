"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const action_creator_1 = tslib_1.__importDefault(require("./action_creator"));
const coordinator_1 = tslib_1.__importDefault(require("./coordinator"));
const thunk_creator_1 = tslib_1.__importDefault(require("./thunk_creator"));
exports.default = (thunkActions) => ({
    forNamespace: (namespace) => ({
        withType: (type) => ({
            withoutPayload: (metaCreator = (() => ({}))) => {
                const actionCreator = new action_creator_1.default(namespace, type, '', () => ({}), metaCreator);
                return new coordinator_1.default(actionCreator);
            },
            withPayload: (metaCreator = (() => ({}))) => {
                const actionCreator = new action_creator_1.default(namespace, type, '', payload => payload, metaCreator);
                return new coordinator_1.default(actionCreator);
            },
            withArgs: (payloadCreator, metaCreator = (() => ({}))) => {
                const actionCreator = new action_creator_1.default(namespace, type, '', payloadCreator, metaCreator);
                return new coordinator_1.default(actionCreator);
            },
            asThunk: (asyncAction, onSuccess) => {
                const thunkCreator = new thunk_creator_1.default(namespace, type, asyncAction, thunkActions, onSuccess);
                return new coordinator_1.default(thunkCreator);
            },
        }),
    }),
});
//# sourceMappingURL=index.js.map