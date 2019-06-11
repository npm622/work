import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare const defaultProps: {
    rightAligned: boolean;
    rootClass: string;
};
declare type Props = {
    children: (toggle: () => void) => React.ReactNode;
    icon: (showing: boolean) => IconProp;
} & typeof defaultProps;
declare const Menu: {
    ({ children, icon, rightAligned, rootClass }: Props): JSX.Element;
    defaultProps: {
        rightAligned: boolean;
        rootClass: string;
    };
    displayName: string;
};
export default Menu;
