"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const defaultProps = {
    className: 'list-item',
};
const ListItem = ({ children, className }) => react_1.default.createElement("li", { className: classnames_1.default(className) }, children);
ListItem.defaultProps = defaultProps;
exports.default = ListItem;
//# sourceMappingURL=index.js.map