"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const connected_react_router_1 = require("connected-react-router");
const actions_1 = tslib_1.__importDefault(require("../actions"));
const types_1 = require("./types");
exports.default = () => {
    const actionFactory = actions_1.default().forNamespace(types_1.ROUTER);
    return {
        goto: actionFactory.withType('goto').asThunk((url) => dispatch => dispatch(connected_react_router_1.push(url))),
    };
};
//# sourceMappingURL=actions.js.map