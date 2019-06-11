import React from 'react';
import { Classer } from '../../components/utils';
interface Props {
    children: React.ReactNode;
    classer: Classer;
}
declare const StackedPageTitle: ({ children, classer: parentClasser }: Props) => JSX.Element;
export default StackedPageTitle;
