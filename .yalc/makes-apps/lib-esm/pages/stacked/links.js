"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const defaultProps = {
    links: {},
};
const StackedPageLinks = ({ classer: parentClasser, links }) => {
    const classer = parentClasser.new('links');
    return (react_1.default.createElement("div", { className: classer.name() }, Object.entries(links).map(([to, display]) => (react_1.default.createElement(react_router_dom_1.Link, { key: to, to: to, className: classer.name('item') }, display)))));
};
StackedPageLinks.defaultProps = defaultProps;
exports.default = StackedPageLinks;
//# sourceMappingURL=links.js.map