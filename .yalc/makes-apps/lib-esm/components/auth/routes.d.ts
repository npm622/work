import React from 'react';
import { User } from '../../store/auth/types';
interface ChildProps<U extends User> {
    noErrorBoundary?: boolean;
    redirects?: {
        standard: string;
        reverse: string;
    };
    stitch?: {
        id: string;
        email?: string;
    };
    user: U | null;
}
interface Props<U extends User> extends ChildProps<U> {
    children: React.ReactNode;
}
declare const AuthenticatedRoutes: <U extends User>({ children, noErrorBoundary, redirects, stitch, user }: Props<U>) => JSX.Element;
export default AuthenticatedRoutes;
