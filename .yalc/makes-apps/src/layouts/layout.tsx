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

const Layout: React.FC<Props> = ({ children, type, rootClass = type }) => {
  const classer = new Classer(rootClass);

  return <div className={classer.name()}>{children(renderApi(classer))}</div>;
};

export default Layout;
