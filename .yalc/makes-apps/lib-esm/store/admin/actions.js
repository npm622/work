"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const actions_1 = tslib_1.__importDefault(require("../actions"));
const types_1 = require("./types");
exports.default = () => {
    const actionFactory = actions_1.default().forNamespace(types_1.ADMIN);
    return {
        startWork: actionFactory
            .withType('start work')
            .withoutPayload()
            .withReducer(state => (Object.assign({}, state, { working: state.working + 1 }))),
        endWork: actionFactory
            .withType('end work')
            .withoutPayload()
            .withReducer(state => (Object.assign({}, state, { working: state.working > 0 ? state.working - 1 : 0 }))),
        ackAlert: actionFactory
            .withType('ack alert')
            .withoutPayload()
            .withReducer(state => (Object.assign({}, state, { alerts: state.alerts.slice(1) }))),
        addAlert: actionFactory
            .withType('add alert')
            .withArgs((type, message, options) => types_1.Alert(type, message, options))
            .withReducer((state, { payload }) => (Object.assign({}, state, { alerts: state.alerts.concat(payload) }))),
        setBackground: actionFactory
            .withType('setBackground')
            .withPayload()
            .withReducer((state, { payload: background }) => (Object.assign({}, state, { background }))),
    };
};
//# sourceMappingURL=actions.js.map