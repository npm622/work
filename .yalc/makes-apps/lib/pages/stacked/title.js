"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var StackedPageTitle = function (_a) {
    var children = _a.children, parentClasser = _a.classer;
    var classer = parentClasser.new('title');
    return react_1.default.createElement("h1", { className: classer.name() }, children);
};
exports.default = StackedPageTitle;
//# sourceMappingURL=title.js.map