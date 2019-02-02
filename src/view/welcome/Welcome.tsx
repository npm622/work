import React from 'react';
import { Link } from 'react-router-dom';
import { urls } from '../../utils';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <div className="todo">
          <p>add rotating text display of "what makes life _____ for you?" ... great, work, interesting</p>
        </div>
        <div className="welcome-jumbotron">
          <h2>what</h2>
          <h1>makes life</h1>
          <h2>for you?</h2>
        </div>
        <div className="welcome-actions">
          <Link className="welcome-actions-link" to={urls.login()}>
            enter...
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
