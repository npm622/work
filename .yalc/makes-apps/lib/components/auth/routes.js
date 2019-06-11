"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_1 = require("react-router");
var error_1 = require("../../components/error");
var AuthenticatedRoutes = function (_a) {
    var children = _a.children, noErrorBoundary = _a.noErrorBoundary, redirects = _a.redirects, stitch = _a.stitch, user = _a.user;
    var routes = (react_1.default.createElement(react_router_1.Switch, null, react_1.default.Children.map(children, function (elem) {
        if (react_1.default.isValidElement(elem)) {
            return react_1.default.cloneElement(elem, { redirects: redirects, stitch: stitch, user: user });
        }
        return null;
    }).filter(function (elem) { return !!elem; })));
    if (noErrorBoundary) {
        return routes;
    }
    return react_1.default.createElement(error_1.RootErrorBoundary, null, routes);
};
exports.default = AuthenticatedRoutes;
//# sourceMappingURL=routes.js.map