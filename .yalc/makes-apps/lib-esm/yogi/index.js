"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const quotes_1 = tslib_1.__importDefault(require("./quotes"));
exports.YogiSays = () => {
    const keys = Object.keys(quotes_1.default);
    return quotes_1.default[keys[Math.floor(keys.length * Math.random())]];
};
//# sourceMappingURL=index.js.map