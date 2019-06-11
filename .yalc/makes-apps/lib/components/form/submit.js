"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var defaultProps = {
    className: 'form-submit',
    display: 'submit',
};
var FormSubmit = function (_a) {
    var className = _a.className, display = _a.display, submittable = _a.submittable;
    return (react_1.default.createElement("button", { className: className, type: "submit", disabled: !submittable }, display));
};
FormSubmit.defaultProps = defaultProps;
exports.default = FormSubmit;
//# sourceMappingURL=submit.js.map