import React from 'react';
import { Classer } from '../../components/utils';

interface Props {
  children: React.ReactNode;
  classer: Classer;
}

const StackedPageTitle = ({ children, classer: parentClasser }: Props) => {
  const classer = parentClasser.new('title');
  return <h1 className={classer.name()}>{children}</h1>;
};

export default StackedPageTitle;
