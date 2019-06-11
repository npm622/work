"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const StackedPageTitle = ({ children, classer: parentClasser }) => {
    const classer = parentClasser.new('title');
    return react_1.default.createElement("h1", { className: classer.name() }, children);
};
exports.default = StackedPageTitle;
//# sourceMappingURL=title.js.map