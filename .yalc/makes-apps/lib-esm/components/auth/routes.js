"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_1 = require("react-router");
const error_1 = require("../../components/error");
const AuthenticatedRoutes = ({ children, noErrorBoundary, redirects, stitch, user }) => {
    const routes = (react_1.default.createElement(react_router_1.Switch, null, react_1.default.Children.map(children, elem => {
        if (react_1.default.isValidElement(elem)) {
            return react_1.default.cloneElement(elem, { redirects, stitch, user });
        }
        return null;
    }).filter(elem => !!elem)));
    if (noErrorBoundary) {
        return routes;
    }
    return react_1.default.createElement(error_1.RootErrorBoundary, null, routes);
};
exports.default = AuthenticatedRoutes;
//# sourceMappingURL=routes.js.map