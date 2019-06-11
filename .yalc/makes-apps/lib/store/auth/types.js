"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH = 'auth';
var AuthState = /** @class */ (function () {
    function AuthState(stitch, user) {
        if (stitch === void 0) { stitch = undefined; }
        if (user === void 0) { user = null; }
        this.stitch = stitch;
        this.user = user;
    }
    return AuthState;
}());
exports.AuthState = AuthState;
//# sourceMappingURL=types.js.map