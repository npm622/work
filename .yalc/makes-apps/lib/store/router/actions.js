"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var connected_react_router_1 = require("connected-react-router");
var actions_1 = tslib_1.__importDefault(require("../actions"));
var types_1 = require("./types");
exports.default = (function () {
    var actionFactory = actions_1.default().forNamespace(types_1.ROUTER);
    return {
        goto: actionFactory.withType('goto').asThunk(function (url) { return function (dispatch) { return dispatch(connected_react_router_1.push(url)); }; }),
    };
});
//# sourceMappingURL=actions.js.map