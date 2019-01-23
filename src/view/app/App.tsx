import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Location } from 'history';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { urls } from '../../utils';
import { Alert, AppState, ackAlert, logout } from '../../state';
import { Footer, Header, View } from '..';

interface StateProps {
  loading: boolean;
  user?: StitchUser;
  alerts: Alert[];
  location: Location;
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

const State = ({ location }: Props) => {
  console.log(location);
  return { activePath: location.pathname };
};

interface State extends ReturnType<typeof State> {}

class App extends React.Component<Props, State> {
  readonly state = State(this.props);

  render() {
    const { ackAlert, alerts, loading, logout, user } = this.props;
    const { gotoAbout, gotoContact, gotoHome, gotoLogin, gotoWelcome } = this.props;
    const { activePath } = this.state;
    console.log(activePath);
    return (
      <div className="app">
        <Header gotoHome={gotoHome} gotoLogin={gotoLogin} gotoWelcome={gotoWelcome} logout={logout} user={user} />
        <View activePath={activePath} gotoAbout={gotoAbout} gotoContact={gotoContact} gotoHome={gotoHome} user={user} />
        <Footer loading={loading} alerts={alerts} ackAlert={ackAlert} />
      </div>
    );
  }
}

const mapStateToProps = ({ admin, router }: AppState) => ({
  loading: admin.loading,
  user: admin.user,
  alerts: admin.alerts,
  location: router.location,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
