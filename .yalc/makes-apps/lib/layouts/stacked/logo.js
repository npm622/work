"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var StackedLogo = function (_a) {
    var children = _a.children, parentClasser = _a.classer, to = _a.to;
    return (react_1.default.createElement(react_router_dom_1.Link, { to: to, className: parentClasser.name('logo') }, children));
};
exports.default = StackedLogo;
//# sourceMappingURL=logo.js.map