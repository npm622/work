import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppState } from '../../../state';
import { UserMenu } from '.';

interface StateProps {
  location: string;
}

interface DispatchProps {
  gotoWelcome: () => void;
  gotoLogin: () => void;
}

type Props = StateProps & DispatchProps;


class Header extends Component<Props> {

  render() {
    const { gotoLogin, gotoWelcome } = this.props;
    return (
      <div className="app-header">
        <img src="static/logo.png" alt="mmdb" onClick={gotoWelcome} />
        <UserMenu gotoLogin={gotoLogin} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.router!.location.pathname,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    gotoWelcome: () => dispatch(push('/')),
    gotoLogin: () => dispatch(push('/login')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
