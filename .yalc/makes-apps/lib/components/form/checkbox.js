"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var defaultProps = {
    className: 'checkbox-input',
};
var CheckboxInput = function (_a) {
    var className = _a.className, options = _a.options, values = _a.values, onChange = _a.onChange;
    return (react_1.default.createElement("div", { className: "form-control-input-list-container" }, Object.entries(options).map(function (_a) {
        var key = _a[0], value = _a[1];
        return (react_1.default.createElement("label", { className: className, key: value },
            react_1.default.createElement("input", { className: className + "-option", type: "checkbox", name: key, checked: values.indexOf(key) >= 0, onChange: function (e) { return onChange(e.target.name); } }),
            "\u00A0",
            value));
    })));
};
CheckboxInput.defaultProps = defaultProps;
exports.default = CheckboxInput;
//# sourceMappingURL=checkbox.js.map