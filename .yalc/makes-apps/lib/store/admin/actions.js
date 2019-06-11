"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var actions_1 = tslib_1.__importDefault(require("../actions"));
var types_1 = require("./types");
exports.default = (function () {
    var actionFactory = actions_1.default().forNamespace(types_1.ADMIN);
    return {
        startWork: actionFactory
            .withType('start work')
            .withoutPayload()
            .withReducer(function (state) { return (tslib_1.__assign({}, state, { working: state.working + 1 })); }),
        endWork: actionFactory
            .withType('end work')
            .withoutPayload()
            .withReducer(function (state) { return (tslib_1.__assign({}, state, { working: state.working > 0 ? state.working - 1 : 0 })); }),
        ackAlert: actionFactory
            .withType('ack alert')
            .withoutPayload()
            .withReducer(function (state) { return (tslib_1.__assign({}, state, { alerts: state.alerts.slice(1) })); }),
        addAlert: actionFactory
            .withType('add alert')
            .withArgs(function (type, message, options) { return types_1.Alert(type, message, options); })
            .withReducer(function (state, _a) {
            var payload = _a.payload;
            return (tslib_1.__assign({}, state, { alerts: state.alerts.concat(payload) }));
        }),
        setBackground: actionFactory
            .withType('setBackground')
            .withPayload()
            .withReducer(function (state, _a) {
            var background = _a.payload;
            return (tslib_1.__assign({}, state, { background: background }));
        }),
    };
});
//# sourceMappingURL=actions.js.map