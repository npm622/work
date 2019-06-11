import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Classer } from '../../components/utils';
interface Props {
    classer: Classer;
    links: NavLink[];
}
export declare type NavLink = {
    type: 'link';
    to: string;
    display: string;
} | {
    type: 'button';
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
    display: IconProp;
    tooltip?: string;
    active: boolean;
};
declare const StackedPageNav: ({ classer: parentClasser, links }: Props) => JSX.Element;
export default StackedPageNav;
