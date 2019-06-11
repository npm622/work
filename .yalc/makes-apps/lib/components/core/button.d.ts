import React from 'react';
declare const defaultProps: {
    className: string;
    onClick: () => void;
    size: "small" | "normal" | "large" | "xsmall";
    variant: "default" | "info" | "primary" | "danger" | "contrast";
};
declare type Props = {
    children: React.ReactNode;
    disabled?: boolean;
    href?: string;
} & typeof defaultProps;
declare const Button: {
    ({ children, className, disabled, href, size, variant, ...rest }: Props): JSX.Element;
    defaultProps: {
        className: string;
        onClick: () => void;
        size: "small" | "normal" | "large" | "xsmall";
        variant: "default" | "info" | "primary" | "danger" | "contrast";
    };
    displayName: string;
};
export default Button;
