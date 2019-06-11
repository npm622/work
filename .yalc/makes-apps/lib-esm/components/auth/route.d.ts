/// <reference types="react" />
import { RouteProps } from 'react-router';
import { User } from '../../store/auth/types';
interface Props<U extends User> extends RouteProps {
    user?: U;
    stitch?: {
        id: string;
        email?: string;
    };
    open?: boolean;
    permit?: (api: ReturnType<typeof protectionApi>) => boolean;
    redirects?: {
        standard: string;
        reverse: string;
    };
    redirectTo?: string;
    reverse?: boolean;
    type?: string;
}
declare const protectionApi: <U extends User>(user?: U | undefined, stitch?: {
    id: string;
    email?: string | undefined;
} | undefined) => {
    user: U | undefined;
    stitch: {
        id: string;
        email?: string | undefined;
    } | undefined;
    hasRole: (type: string) => boolean;
};
declare const AuthRoute: <U extends User>({ user, stitch, open, permit, redirectTo, redirects, reverse, type, component: Component, render, ...rest }: Props<U>) => JSX.Element;
export default AuthRoute;
