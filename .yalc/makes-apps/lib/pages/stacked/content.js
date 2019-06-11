"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var StackedPageContent = function (_a) {
    var children = _a.children, parentClasser = _a.classer;
    var classer = parentClasser.new('content');
    return react_1.default.createElement("div", { className: classer.name() }, children);
};
exports.default = StackedPageContent;
//# sourceMappingURL=content.js.map