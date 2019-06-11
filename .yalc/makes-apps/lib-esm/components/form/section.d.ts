import React from 'react';
import { Classer } from '../utils';
declare const defaultProps: {
    className: string;
};
declare type Props = {
    classer: Classer;
    header: string | React.ReactElement<{
        className?: string;
    }>;
    children: React.ReactNode;
} & typeof defaultProps;
declare const FormSection: {
    ({ children, className, classer: parentClasser, header }: Props): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default FormSection;
