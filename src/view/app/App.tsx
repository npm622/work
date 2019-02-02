import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { push } from 'connected-react-router';
// import { Location } from 'history';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { urls } from '../../utils';
import { Alert, AppState, ackAlert, logout } from '../../state';
import { Footer, Header, View } from '..';

interface StateProps extends RouteComponentProps {
  loading: boolean;
  user?: StitchUser;
  alerts: Alert[];
}

interface DispatchProps {
  ackAlert: () => void;
  gotoAbout: () => void;
  gotoContact: () => void;
  gotoHome: () => void;
  gotoWelcome: () => void;
  gotoLogin: () => void;
  logout: () => void;
}

type Props = StateProps & DispatchProps;

class App extends React.Component<Props> {
  render() {
    const { ackAlert, alerts, loading, location, logout, user } = this.props;
    const { gotoAbout, gotoContact, gotoHome, gotoLogin, gotoWelcome } = this.props;
    return (
      <div className="app">
        <Header gotoHome={gotoHome} gotoLogin={gotoLogin} gotoWelcome={gotoWelcome} logout={logout} user={user} />
        <View
          activePath={location.pathname.substring(1)}
          gotoAbout={gotoAbout}
          gotoContact={gotoContact}
          gotoHome={gotoHome}
          user={user}
        />
        <Footer loading={loading} alerts={alerts} ackAlert={ackAlert} />
      </div>
    );
  }
}

const mapStateToProps = ({ admin }: AppState) => ({
  loading: admin.loading,
  user: admin.user,
  alerts: admin.alerts,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ackAlert: () => dispatch(ackAlert()),
  gotoAbout: () => dispatch(push(urls.about())),
  gotoContact: () => dispatch(push(urls.contact())),
  gotoHome: () => dispatch(push(urls.home())),
  gotoLogin: () => dispatch(push(urls.login())),
  gotoWelcome: () => dispatch(push(urls.welcome())),
  logout: () => dispatch<any>(logout.action()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);