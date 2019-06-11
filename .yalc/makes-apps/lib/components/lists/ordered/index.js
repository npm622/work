"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var defaultProps = {
    className: 'list',
};
var OrderedList = function (_a) {
    var children = _a.children, className = _a.className;
    return react_1.default.createElement("ol", { className: classnames_1.default(className) }, children);
};
OrderedList.defaultProps = defaultProps;
exports.default = OrderedList;
//# sourceMappingURL=index.js.map