"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTER = 'router';
class RouterState {
    constructor(location = { pathname: '', search: '', state: {}, hash: '' }, action = 'PUSH') {
        this.location = location;
        this.action = action;
    }
}
exports.RouterState = RouterState;
//# sourceMappingURL=types.js.map