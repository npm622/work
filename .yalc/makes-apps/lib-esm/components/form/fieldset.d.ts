import React from 'react';
import { Classer } from '../utils';
declare const defaultProps: {
    className: string;
};
declare type Props = {
    classer: Classer;
    legend: string;
    children: React.ReactNode;
} & typeof defaultProps;
declare const FormFieldset: {
    ({ children, className, classer: parentClasser, legend }: Props): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default FormFieldset;
