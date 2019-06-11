import React from 'react';
import { Classer } from '../../components/utils';
interface Props {
    children?: never;
    classer: Classer;
    currentRoute: string;
    links: {
        [key: string]: string;
    };
    userMenu: UserMenuLink[];
    working: number;
}
declare const StackedNav: React.FC<Props>;
declare type UserMenuLink = {
    type: 'link';
    to: string;
    display: string;
} | {
    type: 'button';
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
    display: string;
};
export default StackedNav;
