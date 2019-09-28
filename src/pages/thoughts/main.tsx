import React from 'react';
import { useHeadline, YogiFactory } from '@makes-apps/lib';

import Page from './page';

const Main = () => {
  const { setHeadline } = useHeadline();

  React.useEffect(() => {
    setHeadline(YogiFactory());
    return () => setHeadline();
  }, []);

  return <Page />;
};

export default Main;
