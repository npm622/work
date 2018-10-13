import React from 'react';

interface Props {}

const defaultState = {
  time: new Date().toLocaleString(),
};

type State = typeof defaultState;

class Footer extends React.Component<Props, State> {
  state: State = defaultState;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return <div className="app-footer">hand rolled by mmdb.</div>;
  }
}

export default Footer;
