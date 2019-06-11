"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const actions_1 = tslib_1.__importDefault(require("../actions"));
const types_1 = require("./types");
exports.default = (siteName, adminActions, authActions) => {
    const actionFactory = actions_1.default(adminActions).forNamespace(types_1.AUTH);
    return {
        setUser: actionFactory
            .withType('set user')
            .withPayload()
            .withReducer((state, { payload: stitch }) => (Object.assign({}, state, { stitch: stitch ? { id: stitch.id, email: stitch.profile.email } : undefined }))),
        fetchUser: actionFactory
            .withType('fetch user')
            .asThunk((email) => (_dispatch, _getState, context) => authActions(context).fetchUser(email), ({ args: [email], payload }) => payload ? `Successfully retrieved user data for ${email}` : `Found no user data for ${email}`)
            .withReducer((state, action) => {
            if (action.status === 'success') {
                return Object.assign({}, state, { user: action.payload });
            }
            return state;
        }),
        login: actionFactory
            .withType('login')
            .asThunk((email, password) => (_dispatch, _getState, context) => authActions(context).login(email, password), ({ args: [email] }) => `Welcome back, ${email}`),
        logout: actionFactory
            .withType('logout')
            .asThunk(() => (_dispatch, _getState, context) => authActions(context).logout(), 'You have successfully logged out. We hope to see you soon!'),
        register: actionFactory
            .withType('register')
            .asThunk((email, password) => (_dispatch, _getState, context) => authActions(context).register(email, password), ({ args: [email] }) => `An email has been sent to your inbox (${email}) containing a link to confirm your email address.`),
        sendConfirmationEmail: actionFactory
            .withType('send confirmation email')
            .asThunk((email) => (_dispatch, _getState, context) => authActions(context).sendConfirmationEmail(email), ({ args: [email] }) => `An email has been sent to your inbox (${email}) containing a link to confirm your email address.`),
        sendPasswordResetEmail: actionFactory
            .withType('send password reset email')
            .asThunk((email) => (_dispatch, _getState, context) => authActions(context).sendPasswordResetEmail(email), ({ args: [email] }) => `An email has been sent to your inbox (${email}) containing a link to reset your password.`),
        confirmEmail: actionFactory
            .withType('confirm email')
            .asThunk((token, tokenId) => (_dispatch, _getState, context) => authActions(context).confirmEmail(token, tokenId), `Thank you for confirming your email address. Welcome to ${siteName}!`),
        resetPassword: actionFactory
            .withType('reset password')
            .asThunk((token, tokenId, password) => (_dispatch, _getState, context) => authActions(context).resetPassword(token, tokenId, password), 'You have successfully changed your password.'),
    };
};
//# sourceMappingURL=actions.js.map