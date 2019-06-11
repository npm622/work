"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const components_1 = require("../../components");
const StackedNav = ({ classer: parentClasser, currentRoute, links, userMenu, working }) => {
    const classer = parentClasser.new('nav');
    return (react_1.default.createElement("div", { className: classer.name() },
        react_1.default.createElement(Links, { classer: classer.new('links'), currentRoute: currentRoute, links: links }),
        react_1.default.createElement(Spinner, { classer: classer.new('spinner'), working: working }),
        react_1.default.createElement(UserMenu, { classer: classer.new('user'), menu: userMenu })));
};
const Links = ({ classer, currentRoute, links }) => (react_1.default.createElement("div", { className: classer.name() }, Object.entries(links).map(([to, display]) => (react_1.default.createElement(react_router_dom_1.Link, { key: to, to: to, className: classnames_1.default(classer.name('item'), { [classer.name('item-active')]: currentRoute === to }) }, display)))));
const Spinner = ({ classer, working }) => (react_1.default.createElement("div", { className: classnames_1.default(classer.name(), { [classer.name('showing')]: working }) },
    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "baseball-ball", fixedWidth: true, size: "2x", spin: true })));
const UserMenuLinkComponent = (toggle, link) => link.type === 'link' ? (react_1.default.createElement(react_router_dom_1.Link, { key: link.to, to: link.to, onClick: toggle }, link.display)) : (react_1.default.createElement("button", { key: link.display, onClick: e => Promise.resolve(link.onClick(e)).then(toggle) }, link.display));
const UserMenu = ({ classer, menu }) => (react_1.default.createElement("div", { className: classer.name() },
    react_1.default.createElement(components_1.Menu, { icon: showing => (showing ? 'times' : 'user'), rightAligned: true, rootClass: classer.name('menu') }, toggle => menu.map(link => UserMenuLinkComponent(toggle, link)))));
StackedNav.displayName = 'StackedNav';
exports.default = StackedNav;
//# sourceMappingURL=nav.js.map