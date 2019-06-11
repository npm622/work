"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    className: ''
};
const FormSection = ({ children, className, classer: parentClasser, header }) => {
    const classer = parentClasser.new('section');
    return (react_1.default.createElement("section", { className: classnames_1.default(className, classer.name()) },
        typeof header === 'string' ? (react_1.default.createElement("h2", { className: classer.name('header') }, header)) : (react_1.default.cloneElement(header, { className: classnames_1.default(header.props.className, classer.name('header')) })),
        react_1.default.createElement("div", { className: classer.name('content') }, react_1.default.Children.map(children, child => {
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