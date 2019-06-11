import { AdminState, Alert, Background } from './types';
declare const _default: <STATE extends {}, CONTEXT extends {}>() => {
    startWork: import("../actions/coordinator").default<AdminState, import("../actions/action_creator").default<"start work", "", [], {}, {}>>;
    endWork: import("../actions/coordinator").default<AdminState, import("../actions/action_creator").default<"end work", "", [], {}, {}>>;
    ackAlert: import("../actions/coordinator").default<AdminState, import("../actions/action_creator").default<"ack alert", "", [], {}, {}>>;
    addAlert: import("../actions/coordinator").default<AdminState, import("../actions/action_creator").default<"add alert", "", ["error" | "success" | "debug" | "info" | "warn", string, import("./types").AlertOptions], Alert, {}>>;
    setBackground: import("../actions/coordinator").default<AdminState, import("../actions/action_creator").default<"setBackground", "", [Background], Background, {}>>;
};
export default _default;
