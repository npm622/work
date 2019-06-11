"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    className: ''
};
const FormFieldset = ({ children, className, classer: parentClasser, legend }) => {
    const classer = parentClasser.new('fieldset');
    return (react_1.default.createElement("fieldset", { className: classnames_1.default(className, classer.name()) },
        react_1.default.createElement("legend", { className: classnames_1.default(classer.name('legend'), { [classer.name('legend-visible')]: legend }) }, legend),
        children));
};
FormFieldset.defaultProps = defaultProps;
exports.default = FormFieldset;
//# sourceMappingURL=fieldset.js.map