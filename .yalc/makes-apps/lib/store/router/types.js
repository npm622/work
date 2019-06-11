"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTER = 'router';
var RouterState = /** @class */ (function () {
    function RouterState(location, action) {
        if (location === void 0) { location = { pathname: '', search: '', state: {}, hash: '' }; }
        if (action === void 0) { action = 'PUSH'; }
        this.location = location;
        this.action = action;
    }
    return RouterState;
}());
exports.RouterState = RouterState;
//# sourceMappingURL=types.js.map