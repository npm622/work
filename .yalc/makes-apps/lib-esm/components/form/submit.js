"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const defaultProps = {
    className: 'form-submit',
    display: 'submit',
};
const FormSubmit = ({ className, display, submittable }) => {
    return (react_1.default.createElement("button", { className: className, type: "submit", disabled: !submittable }, display));
};
FormSubmit.defaultProps = defaultProps;
exports.default = FormSubmit;
//# sourceMappingURL=submit.js.map