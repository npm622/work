"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var utils_1 = require("../utils");
var defaultProps = {
    rightAligned: false,
    rootClass: 'menu',
};
var initialState = { showing: false };
var toggleShowing = function (_a) {
    var showing = _a.showing;
    return ({ showing: !showing });
};
var Menu = function (_a) {
    var _b;
    var children = _a.children, icon = _a.icon, rightAligned = _a.rightAligned, rootClass = _a.rootClass;
    var _c = react_1.default.useState(initialState), showing = _c[0].showing, setState = _c[1];
    var toggle = function () { return setState(toggleShowing); };
    var classer = new utils_1.Classer(rootClass);
    return (react_1.default.createElement("div", { className: classer.name() },
        react_1.default.createElement("button", { className: classer.name('toggle'), onClick: toggle },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon(showing), fixedWidth: true, size: "2x" })),
        showing && (react_1.default.createElement("div", { className: classnames_1.default(classer.name('contents'), (_b = {}, _b[classer.name('contents-is-right')] = rightAligned, _b)) }, react_1.default.Children.map(children(toggle), function (child) {
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