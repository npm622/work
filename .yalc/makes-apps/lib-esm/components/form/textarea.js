"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    className: 'textarea-input',
    rows: 5,
    onBlur: (_v) => { },
    onFocus: (_v) => { },
};
const TextareaInput = (_a) => {
    var { className, onChange, onBlur, onFocus } = _a, rest = tslib_1.__rest(_a, ["className", "onChange", "onBlur", "onFocus"]);
    return (react_1.default.createElement("textarea", Object.assign({}, rest, { className: classnames_1.default(className), onChange: e => onChange(e.target.value), onBlur: e => onBlur(e.target.value), onFocus: e => onFocus(e.target.value) })));
};
TextareaInput.defaultProps = defaultProps;
exports.default = TextareaInput;
//# sourceMappingURL=textarea.js.map