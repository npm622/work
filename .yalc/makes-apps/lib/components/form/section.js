"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var defaultProps = {
    className: ''
};
var FormSection = function (_a) {
    var children = _a.children, className = _a.className, parentClasser = _a.classer, header = _a.header;
    var classer = parentClasser.new('section');
    return (react_1.default.createElement("section", { className: classnames_1.default(className, classer.name()) },
        typeof header === 'string' ? (react_1.default.createElement("h2", { className: classer.name('header') }, header)) : (react_1.default.cloneElement(header, { className: classnames_1.default(header.props.className, classer.name('header')) })),
        react_1.default.createElement("div", { className: classer.name('content') }, react_1.default.Children.map(children, function (child) {
            if (react_1.default.isValidElement(child)) {
                return react_1.default.cloneElement(child, {
                    className: classnames_1.default(child.props.className, classer.name('content-child')),
                });
            }
            return null;
        }))));
};
FormSection.defaultProps = defaultProps;
exports.default = FormSection;
//# sourceMappingURL=section.js.map