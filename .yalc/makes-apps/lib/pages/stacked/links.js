"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var defaultProps = {
    links: {},
};
var StackedPageLinks = function (_a) {
    var parentClasser = _a.classer, links = _a.links;
    var classer = parentClasser.new('links');
    return (react_1.default.createElement("div", { className: classer.name() }, Object.entries(links).map(function (_a) {
        var to = _a[0], display = _a[1];
        return (react_1.default.createElement(react_router_dom_1.Link, { key: to, to: to, className: classer.name('item') }, display));
    })));
};
StackedPageLinks.defaultProps = defaultProps;
exports.default = StackedPageLinks;
//# sourceMappingURL=links.js.map