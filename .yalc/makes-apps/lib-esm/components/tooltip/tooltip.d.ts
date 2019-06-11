import React from 'react';
declare const defaultProps: {
    length: "small" | "medium" | "large" | "fit" | undefined;
    orientation: NavigationReason;
};
declare type Props = {
    children: React.ReactElement<any>;
    className?: string;
    clickable?: boolean;
    text?: string;
} & typeof defaultProps;
declare const Tooltip: {
    ({ children: child, className, clickable, length, orientation, text }: Props): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    defaultProps: {
        length: "small" | "medium" | "large" | "fit" | undefined;
        orientation: NavigationReason;
    };
};
export default Tooltip;
