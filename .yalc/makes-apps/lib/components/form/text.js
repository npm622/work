"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var defaultProps = {
    className: 'text-input',
    type: 'text',
    onBlur: function (_v) { },
    onFocus: function (_v) { },
};
var TextInput = function (_a) {
    var className = _a.className, type = _a.type, _b = _a.onChange, onChange = _b === void 0 ? function () { } : _b, onBlur = _a.onBlur, onFocus = _a.onFocus, rest = tslib_1.__rest(_a, ["className", "type", "onChange", "onBlur", "onFocus"]);
    return (react_1.default.createElement("input", tslib_1.__assign({}, rest, { className: classnames_1.default(className), type: type, onChange: function (e) { return onChange(e.target.value); }, onBlur: function (e) { return onBlur(e.target.value); }, onFocus: function (e) { return onFocus(e.target.value); } })));
};
TextInput.defaultProps = defaultProps;
exports.default = TextInput;
//# sourceMappingURL=text.js.map