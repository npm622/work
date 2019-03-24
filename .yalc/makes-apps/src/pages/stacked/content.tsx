import React from 'react';
import { Classer } from '../../components/utils';

interface Props {
  children: React.ReactNode;
  classer: Classer;
}

const StackedPageContent = ({ children, classer: parentClasser }: Props) => {
  const classer = parentClasser.new('content');
  return <div className={classer.name()}>{children}</div>;
};

export default StackedPageContent;
