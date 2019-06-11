"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var actions_1 = tslib_1.__importDefault(require("../actions"));
var types_1 = require("./types");
exports.default = (function (siteName, adminActions, authActions) {
    var actionFactory = actions_1.default(adminActions).forNamespace(types_1.AUTH);
    return {
        setUser: actionFactory
            .withType('set user')
            .withPayload()
            .withReducer(function (state, _a) {
            var stitch = _a.payload;
            return (tslib_1.__assign({}, state, { stitch: stitch ? { id: stitch.id, email: stitch.profile.email } : undefined }));
        }),
        fetchUser: actionFactory
            .withType('fetch user')
            .asThunk(function (email) { return function (_dispatch, _getState, context) { return authActions(context).fetchUser(email); }; }, function (_a) {
            var email = _a.args[0], payload = _a.payload;
            return payload ? "Successfully retrieved user data for " + email : "Found no user data for " + email;
        })
            .withReducer(function (state, action) {
            if (action.status === 'success') {
                return tslib_1.__assign({}, state, { user: action.payload });
            }
            return state;
        }),
        login: actionFactory
            .withType('login')
            .asThunk(function (email, password) { return function (_dispatch, _getState, context) {
            return authActions(context).login(email, password);
        }; }, function (_a) {
            var email = _a.args[0];
            return "Welcome back, " + email;
        }),
        logout: actionFactory
            .withType('logout')
            .asThunk(function () { return function (_dispatch, _getState, context) { return authActions(context).logout(); }; }, 'You have successfully logged out. We hope to see you soon!'),
        register: actionFactory
            .withType('register')
            .asThunk(function (email, password) { return function (_dispatch, _getState, context) {
            return authActions(context).register(email, password);
        }; }, function (_a) {
            var email = _a.args[0];
            return "An email has been sent to your inbox (" + email + ") containing a link to confirm your email address.";
        }),
        sendConfirmationEmail: actionFactory
            .withType('send confirmation email')
            .asThunk(function (email) { return function (_dispatch, _getState, context) { return authActions(context).sendConfirmationEmail(email); }; }, function (_a) {
            var email = _a.args[0];
            return "An email has been sent to your inbox (" + email + ") containing a link to confirm your email address.";
        }),
        sendPasswordResetEmail: actionFactory
            .withType('send password reset email')
            .asThunk(function (email) { return function (_dispatch, _getState, context) { return authActions(context).sendPasswordResetEmail(email); }; }, function (_a) {
            var email = _a.args[0];
            return "An email has been sent to your inbox (" + email + ") containing a link to reset your password.";
        }),
        confirmEmail: actionFactory
            .withType('confirm email')
            .asThunk(function (token, tokenId) { return function (_dispatch, _getState, context) {
            return authActions(context).confirmEmail(token, tokenId);
        }; }, "Thank you for confirming your email address. Welcome to " + siteName + "!"),
        resetPassword: actionFactory
            .withType('reset password')
            .asThunk(function (token, tokenId, password) { return function (_dispatch, _getState, context) {
            return authActions(context).resetPassword(token, tokenId, password);
        }; }, 'You have successfully changed your password.'),
    };
});
//# sourceMappingURL=actions.js.map