"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionCoordinator = /** @class */ (function () {
    function ActionCoordinator(creator) {
        var _this = this;
        this.creator = creator;
        this.handleAction = function (state, action) {
            return _this.reducer(state, action);
        };
        this.withReducer = function (reducer) {
            _this.reducer = reducer;
            return _this;
        };
        this.reducer = function (state, _action) { return state; };
    }
    return ActionCoordinator;
}());
exports.default = ActionCoordinator;
//# sourceMappingURL=coordinator.js.map