import React from 'react';
import { Classer } from '../components/utils';
interface Props {
    children: (api: ReturnType<typeof renderApi>) => React.ReactNode;
    rootClass?: string;
    type: 'dashboard' | 'stacked';
}
declare const renderApi: (classer: Classer) => {
    classer: Classer;
};
declare const Page: ({ children, type, rootClass }: Props) => JSX.Element;
export default Page;
