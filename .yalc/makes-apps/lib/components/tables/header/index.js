"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var core_1 = require("../../core");
var defaultProps = {
    className: 'table-header',
};
var TableHeader = function (_a) {
    var _b;
    var child = _a.children, className = _a.className, rotate = _a.rotate, sortable = _a.sortable;
    var _c = react_1.default.useState(false), sortOrder = _c[0], setSortOrder = _c[1];
    var content = sortable ? react_1.default.createElement(core_1.Button, { onClick: function () { return setSortOrder(!sortOrder); } }, child) : child;
    return (react_1.default.createElement("th", { className: classnames_1.default(className, (_b = {},
            _b[className + "-rotate"] = rotate,
            _b[className + "-sortable"] = sortable,
            _b[className + "-ascending"] = sortable && sortOrder === false,
            _b[className + "-descending"] = sortable && sortOrder === true,
            _b)) }, rotate ? react_1.default.createElement("div", null,
        react_1.default.createElement("span", null, content)) : content));
};
TableHeader.defaultProps = defaultProps;
exports.default = TableHeader;
//# sourceMappingURL=index.js.map