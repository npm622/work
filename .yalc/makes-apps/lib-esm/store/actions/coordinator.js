"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionCoordinator {
    constructor(creator) {
        this.creator = creator;
        this.handleAction = (state, action) => {
            return this.reducer(state, action);
        };
        this.withReducer = (reducer) => {
            this.reducer = reducer;
            return this;
        };
        this.reducer = (state, _action) => state;
    }
}
exports.default = ActionCoordinator;
//# sourceMappingURL=coordinator.js.map