"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    length: undefined,
    orientation: 'down',
};
const Tooltip = ({ children: child, className, clickable, length, orientation, text }) => {
    const [visible, setVisible] = react_1.default.useState(false);
    const props = {
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
        props['onClick'] = () => setVisible(!visible);
    }
    return react_1.default.cloneElement(child, props);
};
Tooltip.defaultProps = defaultProps;
exports.default = Tooltip;
//# sourceMappingURL=tooltip.js.map