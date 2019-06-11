"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const defaultProps = {
    className: 'table-header'
};
const TableHeader = ({ className, headers }) => {
    return (react_1.default.createElement("tr", { className: className }, headers.map(({ name, width }) => (react_1.default.createElement("th", Object.assign({}, headerProps(width), { className: `${className}-cell`, key: name }), name)))));
};
exports.default = TableHeader;
const headerProps = (width) => {
    const extraProps = {};
    if (width) {
        extraProps['width'] = width;
    }
    return extraProps;
};
//# sourceMappingURL=index.js.map