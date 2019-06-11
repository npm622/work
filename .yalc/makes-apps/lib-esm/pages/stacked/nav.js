"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const components_1 = require("../../components");
const navLinkProps = (classer, key, active) => ({
    key,
    className: classnames_1.default(classer.name('item'), { [classer.name('item-active')]: active }),
});
const NavLinkComponent = (classer, link) => link.type === 'link' ? (react_1.default.createElement(react_router_dom_1.Link, Object.assign({}, navLinkProps(classer, link.to), { to: link.to }), link.display)) : (react_1.default.createElement(components_1.Tooltip, Object.assign({}, navLinkProps(classer, link.display, link.active), { text: link.tooltip }),
    react_1.default.createElement("button", { onClick: link.onClick },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: link.display }))));
const StackedPageNav = ({ classer: parentClasser, links }) => {
    const classer = parentClasser.new('nav');
    return react_1.default.createElement("div", { className: classer.name() }, links.map(link => NavLinkComponent(classer, link)));
};
exports.default = StackedPageNav;
//# sourceMappingURL=nav.js.map