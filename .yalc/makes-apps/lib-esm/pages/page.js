"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../components/utils");
const renderApi = (classer) => ({
    classer,
});
const Page = ({ children, type, rootClass = type }) => {
    const classer = new utils_1.Classer(`${rootClass}-page`);
    return react_1.default.createElement("div", { className: classer.name() }, children(renderApi(classer)));
};
exports.default = Page;
//# sourceMappingURL=page.js.map