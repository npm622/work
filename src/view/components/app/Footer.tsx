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
    return (
      <div className="app-footer">
        <p>makes'd in twenty eighteen.</p>
        <p>
          powered with&nbsp;
          <a href="https://docs.mongodb.com/stitch/" target="_blank" rel="noopener noreferrer">
            mongodb stitch.
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
