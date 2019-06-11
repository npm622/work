"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var components_1 = require("../../components");
var StackedNav = function (_a) {
    var parentClasser = _a.classer, currentRoute = _a.currentRoute, links = _a.links, userMenu = _a.userMenu, working = _a.working;
    var classer = parentClasser.new('nav');
    return (react_1.default.createElement("div", { className: classer.name() },
        react_1.default.createElement(Links, { classer: classer.new('links'), currentRoute: currentRoute, links: links }),
        react_1.default.createElement(Spinner, { classer: classer.new('spinner'), working: working }),
        react_1.default.createElement(UserMenu, { classer: classer.new('user'), menu: userMenu })));
};
var Links = function (_a) {
    var classer = _a.classer, currentRoute = _a.currentRoute, links = _a.links;
    return (react_1.default.createElement("div", { className: classer.name() }, Object.entries(links).map(function (_a) {
        var _b;
        var to = _a[0], display = _a[1];
        return (react_1.default.createElement(react_router_dom_1.Link, { key: to, to: to, className: classnames_1.default(classer.name('item'), (_b = {}, _b[classer.name('item-active')] = currentRoute === to, _b)) }, display));
    })));
};
var Spinner = function (_a) {
    var _b;
    var classer = _a.classer, working = _a.working;
    return (react_1.default.createElement("div", { className: classnames_1.default(classer.name(), (_b = {}, _b[classer.name('showing')] = working, _b)) },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "baseball-ball", fixedWidth: true, size: "2x", spin: true })));
};
var UserMenuLinkComponent = function (toggle, link) {
    return link.type === 'link' ? (react_1.default.createElement(react_router_dom_1.Link, { key: link.to, to: link.to, onClick: toggle }, link.display)) : (react_1.default.createElement("button", { key: link.display, onClick: function (e) { return Promise.resolve(link.onClick(e)).then(toggle); } }, link.display));
};
var UserMenu = function (_a) {
    var classer = _a.classer, menu = _a.menu;
    return (react_1.default.createElement("div", { className: classer.name() },
        react_1.default.createElement(components_1.Menu, { icon: function (showing) { return (showing ? 'times' : 'user'); }, rightAligned: true, rootClass: classer.name('menu') }, function (toggle) { return menu.map(function (link) { return UserMenuLinkComponent(toggle, link); }); })));
};
StackedNav.displayName = 'StackedNav';
exports.default = StackedNav;
//# sourceMappingURL=nav.js.map