"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var defaultProps = {
    className: 'table-header'
};
var TableHeader = function (_a) {
    var className = _a.className, headers = _a.headers;
    return (react_1.default.createElement("tr", { className: className }, headers.map(function (_a) {
        var name = _a.name, width = _a.width;
        return (react_1.default.createElement("th", tslib_1.__assign({}, headerProps(width), { className: className + "-cell", key: name }), name));
    })));
};
exports.default = TableHeader;
var headerProps = function (width) {
    var extraProps = {};
    if (width) {
        extraProps['width'] = width;
    }
    return extraProps;
};
//# sourceMappingURL=index.js.map