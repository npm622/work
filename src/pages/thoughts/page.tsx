import React from 'react';

import connectors from '../../connectors';

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

class HomePage extends React.Component<Props> {
  render() {
    return <>thoughts page</>;
  }
}

export default connectors.withDispatchObject(({}) => ({}), {})(HomePage);
