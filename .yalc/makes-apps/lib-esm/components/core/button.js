"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    className: 'btn',
    onClick: () => { },
    size: 'normal',
    variant: 'default',
};
const Button = (_a) => {
    var { children, className, disabled, href, size, variant } = _a, rest = tslib_1.__rest(_a, ["children", "className", "disabled", "href", "size", "variant"]);
    const Root = href ? 'a' : 'button';
    return (react_1.default.createElement(Root, Object.assign({}, rest, { href: href, className: classnames_1.default(className), disabled: disabled, "aria-disabled": disabled }), children));
};
Button.defaultProps = defaultProps;
Button.displayName = 'Button';
exports.default = Button;
//# sourceMappingURL=button.js.map