import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useHeadline, useToolbar, Flex, LayoutLinkMenu, YogiFactory } from '@makes-apps/lib';

import urls from '../../urls';

import Page from './page';

interface Props extends RouteComponentProps {}

interface ToolbarProps {
  currentRoute: string;
}

const Toolbar = (props: ToolbarProps) => (
  <>
    <LayoutLinkMenu
      {...props}
      activeColor="secondary"
      linkLabels={{ [urls.blogs().list()]: 'thoughts', [urls.blogs().new()]: 'new thought' }}
    />
  </>
);

const Main = (props: Props) => {
  const { setHeadline } = useHeadline();
  const { setToolbar } = useToolbar();

  React.useEffect(() => {
    setHeadline(YogiFactory());
    setToolbar(<Toolbar currentRoute={props.location.pathname} />);
    return () => {
      setHeadline();
      setToolbar();
    };
  }, [props.location.pathname]);

  return (
    <Flex direction="column" alignItems="center" flexGrow="1" overflowY="auto">
      <Page {...props} />
    </Flex>
  );
};

export default Main;
