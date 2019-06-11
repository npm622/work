"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var defaultProps = {
    className: ''
};
var FormFieldset = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, parentClasser = _a.classer, legend = _a.legend;
    var classer = parentClasser.new('fieldset');
    return (react_1.default.createElement("fieldset", { className: classnames_1.default(className, classer.name()) },
        react_1.default.createElement("legend", { className: classnames_1.default(classer.name('legend'), (_b = {}, _b[classer.name('legend-visible')] = legend, _b)) }, legend),
        children));
};
FormFieldset.defaultProps = defaultProps;
exports.default = FormFieldset;
//# sourceMappingURL=fieldset.js.map