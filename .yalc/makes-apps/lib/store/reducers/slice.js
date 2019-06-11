"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var action_creator_1 = require("../actions/action_creator");
exports.default = (function (namespace, initialState, actions) {
    var coordinatorsByType = Object.values(actions).reduce(function (acc, coordinator) {
        var _a;
        return (tslib_1.__assign({}, acc, (_a = {}, _a[action_creator_1.actionType(namespace, coordinator.creator.type)] = coordinator, _a)));
    }, {});
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        var coordinator = coordinatorsByType[action.type];
        if (coordinator) {
            return coordinator.handleAction(state, action);
        }
        return state;
    };
});
//# sourceMappingURL=slice.js.map