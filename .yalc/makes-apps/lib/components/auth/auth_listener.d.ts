import React from 'react';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { User } from '../../store/auth/types';
interface Props<U extends User> {
    stitch?: {
        id: string;
        email?: string;
    };
    fetchUser: (email: string) => Promise<U | null>;
    setUser: (stitch?: StitchUser) => void;
    additionalSetup: () => void;
}
declare class StitchAuthListener<U extends User> extends React.Component<Props<U>> {
    private readonly authListener;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props<U>): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default StitchAuthListener;
