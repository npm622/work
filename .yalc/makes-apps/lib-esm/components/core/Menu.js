"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const utils_1 = require("../utils");
const defaultProps = {
    rightAligned: false,
    rootClass: 'menu',
};
const initialState = { showing: false };
const toggleShowing = ({ showing }) => ({ showing: !showing });
const Menu = ({ children, icon, rightAligned, rootClass }) => {
    const [{ showing }, setState] = react_1.default.useState(initialState);
    const toggle = () => setState(toggleShowing);
    const classer = new utils_1.Classer(rootClass);
    return (react_1.default.createElement("div", { className: classer.name() },
        react_1.default.createElement("button", { className: classer.name('toggle'), onClick: toggle },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon(showing), fixedWidth: true, size: "2x" })),
        showing && (react_1.default.createElement("div", { className: classnames_1.default(classer.name('contents'), { [classer.name('contents-is-right')]: rightAligned }) }, react_1.default.Children.map(children(toggle), child => {
            if (react_1.default.isValidElement(child)) {
                return react_1.default.cloneElement(child, { className: classer.name('contents-item') });
            }
            return null;
        })))));
};
Menu.defaultProps = defaultProps;
Menu.displayName = 'Menu';
exports.default = Menu;
//# sourceMappingURL=Menu.js.map