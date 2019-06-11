"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const defaultProps = {
    className: 'radio-input',
};
const TextInput = ({ className, name, options, value: checkedValue, onChange, }) => {
    return (react_1.default.createElement("div", { className: "form-control-input-list-container" }, Object.entries(options).map(([key, value]) => (react_1.default.createElement("label", { className: className, key: value },
        react_1.default.createElement("input", { className: `${className}-option`, type: "radio", name: name, value: key, checked: key === checkedValue, onChange: e => onChange(e.target.value) }),
        "\u00A0",
        value)))));
};
TextInput.defaultProps = defaultProps;
exports.default = TextInput;
//# sourceMappingURL=radio.js.map