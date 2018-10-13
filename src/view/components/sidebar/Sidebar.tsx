import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { AppState } from '../../../state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DispatchProps {
  gotoHome: () => void;
  gotoAbout: () => void;
  gotoContact: () => void;
}

type Props = DispatchProps;

class Sidebar extends React.Component<Props> {
  render() {
    const { gotoHome, gotoAbout, gotoContact } = this.props;
    return (
      <div className="app-sidebar">
        <button onClick={gotoHome}>
          <FontAwesomeIcon icon="home" size="2x" />
        </button>
        <button onClick={gotoAbout}>
          <FontAwesomeIcon icon="info" size="2x" />
        </button>
        <button onClick={gotoContact}>
          <FontAwesomeIcon icon="beer" size="2x" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.router!.location.pathname,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    gotoHome: () => dispatch(push('/home')),
    gotoAbout: () => dispatch(push('/about')),
    gotoContact: () => dispatch(push('/contact')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
