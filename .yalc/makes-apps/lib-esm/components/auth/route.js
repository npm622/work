"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_1 = require("react-router");
const protectionApi = (user, stitch) => ({
    user,
    stitch,
    hasRole: (type) => (stitch && (!user || isUserQualified(type, user && user.type))) || false,
});
const userTypes = { user: 0, admin: 1, me: 2 };
const isUserQualified = (targetType, userType = '') => {
    const targetScore = userTypes[targetType] || 0;
    const userScore = userTypes[userType] || -1;
    return userScore >= targetScore;
};
const AuthRoute = (_a) => {
    var { user, stitch, open, permit, redirectTo, redirects, reverse, type, component: Component, render } = _a, rest = tslib_1.__rest(_a, ["user", "stitch", "open", "permit", "redirectTo", "redirects", "reverse", "type", "component", "render"]);
    let answer = (stitch && !reverse) || (!stitch && reverse);
    if (type && user) {
        answer = isUserQualified(type, user.type);
    }
    if (permit) {
        answer = permit(protectionApi(user, stitch));
    }
    return (react_1.default.createElement(react_router_1.Route, Object.assign({}, rest, { render: props => {
            if (open || answer) {
                if (Component) {
                    return react_1.default.createElement(Component, Object.assign({}, props));
                }
                if (render) {
                    return render(props);
                }
            }
            return react_1.default.createElement(react_router_1.Redirect, { to: redirectTo || (redirects ? (reverse ? redirects.reverse : redirects.standard) : '') });
        } })));
};
exports.default = AuthRoute;
//# sourceMappingURL=route.js.map