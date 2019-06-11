"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var utils_1 = require("../components/utils");
var renderApi = function (classer) { return ({
    classer: classer,
}); };
var Layout = function (_a) {
    var children = _a.children, type = _a.type, _b = _a.rootClass, rootClass = _b === void 0 ? type : _b;
    var classer = new utils_1.Classer(rootClass);
    return react_1.default.createElement("div", { className: classer.name() }, children(renderApi(classer)));
};
exports.default = Layout;
//# sourceMappingURL=layout.js.map