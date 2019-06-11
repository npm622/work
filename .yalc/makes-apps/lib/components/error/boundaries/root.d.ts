import React from 'react';
interface State {
    error?: Error;
}
declare class RootErrorBoundary extends React.Component<{}, State> {
    readonly state: State;
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    componentDidCatch(error: any, info: any): void;
    render(): {} | null | undefined;
}
export default RootErrorBoundary;
