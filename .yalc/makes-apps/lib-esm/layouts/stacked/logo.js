"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const StackedLogo = ({ children, classer: parentClasser, to }) => (react_1.default.createElement(react_router_dom_1.Link, { to: to, className: parentClasser.name('logo') }, children));
exports.default = StackedLogo;
//# sourceMappingURL=logo.js.map