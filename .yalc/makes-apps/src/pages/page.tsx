import React from 'react';
import { Classer } from '../components/utils';

interface Props {
  children: (api: ReturnType<typeof renderApi>) => React.ReactNode;
  rootClass?: string;
  type: 'dashboard' | 'stacked';
}

const renderApi = (classer: Classer) => ({
  classer,
});

const Page = ({ children, type, rootClass = type }: Props) => {
  const classer = new Classer(`${rootClass}-page`);
  return <div className={classer.name()}>{children(renderApi(classer))}</div>;
};

export default Page;
