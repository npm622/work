"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var defaultProps = {
    className: 'radio-input',
};
var TextInput = function (_a) {
    var className = _a.className, name = _a.name, options = _a.options, checkedValue = _a.value, onChange = _a.onChange;
    return (react_1.default.createElement("div", { className: "form-control-input-list-container" }, Object.entries(options).map(function (_a) {
        var key = _a[0], value = _a[1];
        return (react_1.default.createElement("label", { className: className, key: value },
            react_1.default.createElement("input", { className: className + "-option", type: "radio", name: name, value: key, checked: key === checkedValue, onChange: function (e) { return onChange(e.target.value); } }),
            "\u00A0",
            value));
    })));
};
TextInput.defaultProps = defaultProps;
exports.default = TextInput;
//# sourceMappingURL=radio.js.map