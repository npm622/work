"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    className: 'list',
};
const OrderedList = ({ children, className }) => react_1.default.createElement("ol", { className: classnames_1.default(className) }, children);
OrderedList.defaultProps = defaultProps;
exports.default = OrderedList;
//# sourceMappingURL=index.js.map