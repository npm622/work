"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var defaultProps = {
    length: undefined,
    orientation: 'down',
};
var Tooltip = function (_a) {
    var child = _a.children, className = _a.className, clickable = _a.clickable, length = _a.length, orientation = _a.orientation, text = _a.text;
    var _b = react_1.default.useState(false), visible = _b[0], setVisible = _b[1];
    var props = {
        className: classnames_1.default(className),
        'data-balloon': text,
        'data-balloon-pos': orientation,
    };
    if (length) {
        props['data-balloon-length'] = length;
    }
    if (visible) {
        props['data-balloon-visible'] = true;
    }
    if (clickable) {
        props['onClick'] = function () { return setVisible(!visible); };
    }
    return react_1.default.cloneElement(child, props);
};
Tooltip.defaultProps = defaultProps;
exports.default = Tooltip;
//# sourceMappingURL=tooltip.js.map