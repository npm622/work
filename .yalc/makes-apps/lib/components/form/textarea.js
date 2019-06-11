"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var defaultProps = {
    className: 'textarea-input',
    rows: 5,
    onBlur: function (_v) { },
    onFocus: function (_v) { },
};
var TextareaInput = function (_a) {
    var className = _a.className, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, rest = tslib_1.__rest(_a, ["className", "onChange", "onBlur", "onFocus"]);
    return (react_1.default.createElement("textarea", tslib_1.__assign({}, rest, { className: classnames_1.default(className), onChange: function (e) { return onChange(e.target.value); }, onBlur: function (e) { return onBlur(e.target.value); }, onFocus: function (e) { return onFocus(e.target.value); } })));
};
TextareaInput.defaultProps = defaultProps;
exports.default = TextareaInput;
//# sourceMappingURL=textarea.js.map