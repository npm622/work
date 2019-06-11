"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    className: 'text-input',
    type: 'text',
    onBlur: (_v) => { },
    onFocus: (_v) => { },
};
const TextInput = (_a) => {
    var { className, type, onChange = () => { }, onBlur, onFocus } = _a, rest = tslib_1.__rest(_a, ["className", "type", "onChange", "onBlur", "onFocus"]);
    return (react_1.default.createElement("input", Object.assign({}, rest, { className: classnames_1.default(className), type: type, onChange: e => onChange(e.target.value), onBlur: e => onBlur(e.target.value), onFocus: e => onFocus(e.target.value) })));
};
TextInput.defaultProps = defaultProps;
exports.default = TextInput;
//# sourceMappingURL=text.js.map