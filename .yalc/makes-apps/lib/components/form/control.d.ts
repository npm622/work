import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Classer } from '../utils';
declare const defaultProps: {
    className: string;
    infoIcon: IconProp;
};
declare type Props = {
    active?: boolean;
    children: React.ReactElement<any>;
    classer: Classer;
    label: string;
    description?: string;
    dirty?: boolean;
    error?: string;
    status?: React.ReactNode;
    playback?: string;
} & typeof defaultProps;
declare const FormControl: {
    ({ active, children: child, className, classer: parentClasser, infoIcon, label, description, dirty, error, status, playback, }: Props): JSX.Element;
    defaultProps: {
        className: string;
        infoIcon: IconProp;
    };
};
export default FormControl;
