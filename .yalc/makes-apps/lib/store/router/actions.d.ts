import { RouterState } from './types';
declare const _default: <STATE extends {}, CONTEXT extends {}>() => {
    goto: import("../actions/coordinator").default<RouterState, import("../actions/thunk_creator").default<"goto", [string], any, STATE, CONTEXT>>;
};
export default _default;
