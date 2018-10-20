import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <div className="welcome-jumbotron">
          <h2>what</h2>
          <h1>makes life</h1>
          <h2>for you?</h2>
        </div>
        <div className="welcome-well">
          <h3>here to login?</h3>
          <button>login</button>
          <button>contact</button>
        </div>
        <div className="welcome-well">
          <h3>or just looking...</h3>
          <button>about</button>
        </div>
      </div>
    );
  }
}

export default Welcome;
