"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const defaultProps = {
    className: 'checkbox-input',
};
const CheckboxInput = ({ className, options, values, onChange, }) => {
    return (react_1.default.createElement("div", { className: "form-control-input-list-container" }, Object.entries(options).map(([key, value]) => (react_1.default.createElement("label", { className: className, key: value },
        react_1.default.createElement("input", { className: `${className}-option`, type: "checkbox", name: key, checked: values.indexOf(key) >= 0, onChange: e => onChange(e.target.name) }),
        "\u00A0",
        value)))));
};
CheckboxInput.defaultProps = defaultProps;
exports.default = CheckboxInput;
//# sourceMappingURL=checkbox.js.map