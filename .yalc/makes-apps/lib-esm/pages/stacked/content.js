"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const StackedPageContent = ({ children, classer: parentClasser }) => {
    const classer = parentClasser.new('content');
    return react_1.default.createElement("div", { className: classer.name() }, children);
};
exports.default = StackedPageContent;
//# sourceMappingURL=content.js.map