"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var defaultProps = {
    className: 'btn',
    onClick: function () { },
    size: 'normal',
    variant: 'default',
};
var Button = function (_a) {
    var children = _a.children, className = _a.className, disabled = _a.disabled, href = _a.href, size = _a.size, variant = _a.variant, rest = tslib_1.__rest(_a, ["children", "className", "disabled", "href", "size", "variant"]);
    var Root = href ? 'a' : 'button';
    return (react_1.default.createElement(Root, tslib_1.__assign({}, rest, { href: href, className: classnames_1.default(className), disabled: disabled, "aria-disabled": disabled }), children));
};
Button.defaultProps = defaultProps;
Button.displayName = 'Button';
exports.default = Button;
//# sourceMappingURL=button.js.map