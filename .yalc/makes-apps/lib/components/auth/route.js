"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_1 = require("react-router");
var protectionApi = function (user, stitch) { return ({
    user: user,
    stitch: stitch,
    hasRole: function (type) { return (stitch && (!user || isUserQualified(type, user && user.type))) || false; },
}); };
var userTypes = { user: 0, admin: 1, me: 2 };
var isUserQualified = function (targetType, userType) {
    if (userType === void 0) { userType = ''; }
    var targetScore = userTypes[targetType] || 0;
    var userScore = userTypes[userType] || -1;
    return userScore >= targetScore;
};
var AuthRoute = function (_a) {
    var user = _a.user, stitch = _a.stitch, open = _a.open, permit = _a.permit, redirectTo = _a.redirectTo, redirects = _a.redirects, reverse = _a.reverse, type = _a.type, Component = _a.component, render = _a.render, rest = tslib_1.__rest(_a, ["user", "stitch", "open", "permit", "redirectTo", "redirects", "reverse", "type", "component", "render"]);
    var answer = (stitch && !reverse) || (!stitch && reverse);
    if (type && user) {
        answer = isUserQualified(type, user.type);
    }
    if (permit) {
        answer = permit(protectionApi(user, stitch));
    }
    return (react_1.default.createElement(react_router_1.Route, tslib_1.__assign({}, rest, { render: function (props) {
            if (open || answer) {
                if (Component) {
                    return react_1.default.createElement(Component, tslib_1.__assign({}, props));
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