"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    className: 'table-cell',
};
const TableCell = ({ children, className }) => react_1.default.createElement("td", { className: classnames_1.default(className) }, children);
TableCell.defaultProps = defaultProps;
exports.default = TableCell;
//# sourceMappingURL=index.js.map