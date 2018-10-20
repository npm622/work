import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../state';

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

class Login extends Component<Props> {
  render() {
    return (
      <div className="login">
        <h1>logging in?</h1>
        {/* TODO: figure out how to use email/password auth */}
        {/* <div className="login-form">
          <div className="login-form-row">
            <p>email:</p>
            <input type="text" />
          </div>
          <div className="login-form-row">
            <p>password:</p>
            <input type="password" />
          </div>
          <button>submit</button>
        </div> */}
        <div className="login-request">
          <h3>enter with google?</h3>
          <button>just sign in!</button>
        </div>
        <div className="login-request">
          <h3>enter as guest?</h3>
          <button>come on in!</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (_state: AppState) => ({});

const mapDispatchToProps = (_dispatch: Dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
