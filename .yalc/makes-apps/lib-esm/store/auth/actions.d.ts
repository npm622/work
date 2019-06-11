import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { AnyAction } from '../actions/action';
import { AlertParams } from '../admin/types';
import { User } from './types';
interface AdminActions {
    addAlert: (...args: AlertParams) => AnyAction;
    startWork: () => AnyAction;
    endWork: () => AnyAction;
}
interface AuthActions<CONTEXT extends {}, USER extends User> {
    (context: CONTEXT): {
        fetchUser: (email: string) => Promise<USER | null>;
        login: (email: string, password: string) => Promise<StitchUser>;
        logout: () => Promise<void>;
        register: (email: string, password: string) => Promise<void>;
        sendConfirmationEmail: (email: string) => Promise<void>;
        sendPasswordResetEmail: (email: string) => Promise<void>;
        confirmEmail: (token: string, tokenId: string) => Promise<void>;
        resetPassword: (token: string, tokenId: string, password: string) => Promise<void>;
    };
}
declare const _default: <STATE extends {}, CONTEXT extends {}, USER extends User>(siteName: string, adminActions: AdminActions, authActions: AuthActions<CONTEXT, USER>) => {
    setUser: import("../actions/coordinator").default<{}, import("../actions/action_creator").default<"set user", "", [StitchUser | undefined], StitchUser | undefined, {}>>;
    fetchUser: import("../actions/coordinator").default<{}, import("../actions/thunk_creator").default<"fetch user", [string], USER | null, STATE, CONTEXT>>;
    login: import("../actions/coordinator").default<{}, import("../actions/thunk_creator").default<"login", [string, string], StitchUser, STATE, CONTEXT>>;
    logout: import("../actions/coordinator").default<{}, import("../actions/thunk_creator").default<"logout", [], void, STATE, CONTEXT>>;
    register: import("../actions/coordinator").default<{}, import("../actions/thunk_creator").default<"register", [string, string], void, STATE, CONTEXT>>;
    sendConfirmationEmail: import("../actions/coordinator").default<{}, import("../actions/thunk_creator").default<"send confirmation email", [string], void, STATE, CONTEXT>>;
    sendPasswordResetEmail: import("../actions/coordinator").default<{}, import("../actions/thunk_creator").default<"send password reset email", [string], void, STATE, CONTEXT>>;
    confirmEmail: import("../actions/coordinator").default<{}, import("../actions/thunk_creator").default<"confirm email", [string, string], void, STATE, CONTEXT>>;
    resetPassword: import("../actions/coordinator").default<{}, import("../actions/thunk_creator").default<"reset password", [string, string, string], void, STATE, CONTEXT>>;
};
export default _default;
