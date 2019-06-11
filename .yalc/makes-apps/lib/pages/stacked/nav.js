"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var components_1 = require("../../components");
var navLinkProps = function (classer, key, active) {
    var _a;
    return ({
        key: key,
        className: classnames_1.default(classer.name('item'), (_a = {}, _a[classer.name('item-active')] = active, _a)),
    });
};
var NavLinkComponent = function (classer, link) {
    return link.type === 'link' ? (react_1.default.createElement(react_router_dom_1.Link, tslib_1.__assign({}, navLinkProps(classer, link.to), { to: link.to }), link.display)) : (react_1.default.createElement(components_1.Tooltip, tslib_1.__assign({}, navLinkProps(classer, link.display, link.active), { text: link.tooltip }),
        react_1.default.createElement("button", { onClick: link.onClick },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: link.display }))));
};
var StackedPageNav = function (_a) {
    var parentClasser = _a.classer, links = _a.links;
    var classer = parentClasser.new('nav');
    return react_1.default.createElement("div", { className: classer.name() }, links.map(function (link) { return NavLinkComponent(classer, link); }));
};
exports.default = StackedPageNav;
//# sourceMappingURL=nav.js.map