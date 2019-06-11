"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enzyme = tslib_1.__importStar(require("enzyme"));
const enzyme_adapter_react_16_1 = tslib_1.__importDefault(require("enzyme-adapter-react-16"));
Enzyme.configure({
    adapter: new enzyme_adapter_react_16_1.default(),
});
//# sourceMappingURL=testsetup.js.map