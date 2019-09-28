import React from 'react';
import { useHeadline } from '@makes-apps/lib';

import Page from './page';

const Main = () => {
  const { setHeadline } = useHeadline();

  React.useEffect(() => {
    setHeadline("Let's chat!");
    return () => setHeadline();
  }, []);

  return <Page />;
};

export default Main;
