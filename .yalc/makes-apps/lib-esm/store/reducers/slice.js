"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_creator_1 = require("../actions/action_creator");
exports.default = (namespace, initialState, actions) => {
    const coordinatorsByType = Object.values(actions).reduce((acc, coordinator) => (Object.assign({}, acc, { [action_creator_1.actionType(namespace, coordinator.creator.type)]: coordinator })), {});
    return (state = initialState, action) => {
        const coordinator = coordinatorsByType[action.type];
        if (coordinator) {
            return coordinator.handleAction(state, action);
        }
        return state;
    };
};
//# sourceMappingURL=slice.js.map