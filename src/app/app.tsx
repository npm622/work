import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { adminActions, routerActions, Alert, AppProvider, LoadingPreloader, DashboardLayout } from '@makes-apps/lib';

import { LogoDark, LogoLight } from '../components';
import { connectors } from '../root';
import { authActions } from '../store';
import { User } from '../types';
import urls from '../urls';

import Routes from './routes';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  alerts: Alert[];
  user?: User;
  working: number;
}

interface DispatchProps {
  ackAlert: () => void;
  goto: (url: string) => void;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  sendEmailConfirmation: (email: string) => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  confirmEmail: (token: string, tokenId: string) => Promise<void>;
  resetPassword: (token: string, tokenId: string, password: string) => Promise<void>;
}

type Props = OwnProps & StateProps & DispatchProps;

class App extends React.Component<Props> {
  render() {
    const {
      ackAlert,
      alerts,
      confirmEmail,
      location: { pathname: currentRoute },
      login,
      logout,
      register,
      resetPassword,
      sendEmailConfirmation,
      sendPasswordReset,
      user,
      working,
    } = this.props;

    const authActions = {
      login,
      logout,
      register,
      sendConfirmationEmail: sendEmailConfirmation,
      sendPasswordResetEmail: sendPasswordReset,
      confirmEmail,
      resetPassword,
    };

    // const nav = {
    //   [urls.home()]: 'home',
    //   [urls.contact()]: 'contact',
    //   [urls.blogs().finder()]: 'thoughts',
    // };

    if (user) {
      return <LoadingPreloader />;
    }

    return (
      <AppProvider
        name="makes-life"
        options={{
          primaryColor: 'green',
          secondaryColor: 'blue',
          logoFont: 'Fredericka the Great, serif',
          headingFont: 'Oswald, sans-serif',
          bodyFont: 'Quattrocento, serif',
        }}
      >
        <DashboardLayout
          ackAlert={ackAlert}
          alerts={alerts}
          credits={[
            {
              icon: 'GithubIcon',
              href: 'https://github.com/npm622/work',
              text: 'Check out some code',
            },
            { icon: 'MongodbIcon', href: 'https://cloud.mongodb.com', text: 'Powered by MongoDB' },
          ]}
          currentRoute={currentRoute}
          emailConfirmationlUrl={urls.auth().confirmation()}
          loginUrl={urls.auth().login()}
          logo={{
            to: urls.welcome(),
            render: ({ themeMode }) => (themeMode === 'light' ? <LogoDark /> : <LogoLight />),
          }}
          logout={logout}
          mantra="don't let money change ya"
          navbar={[
            { as: 'link', to: urls.home(), label: 'home' },
            { as: 'link', to: urls.contact(), label: 'contact' },
            { as: 'link', to: urls.blogs().finder(), label: 'thoughts' },
          ]}
          passwordResetUrl={urls.auth().passwordReset()}
          profileUrl={urls.profile()}
          registerUrl={urls.auth().register()}
          user={user}
          working={working > 0}
        >
          <Routes authActions={authActions} user={user} />
        </DashboardLayout>
      </AppProvider>
    );
  }
}

export default withRouter(
  connectors.withDispatchObject(
    ({ admin, auth }) => ({
      alerts: admin.alerts,
      user: auth.user,
      working: admin.working,
    }),
    {
      ackAlert: adminActions.ackAlert,
      goto: routerActions.goto,
      login: authActions.login.creator.worker,
      logout: authActions.logout.creator.worker,
      register: authActions.register.creator.worker,
      sendEmailConfirmation: authActions.sendConfirmationEmail.creator.worker,
      sendPasswordReset: authActions.sendPasswordResetEmail.creator.worker,
      confirmEmail: authActions.confirmEmail.creator.worker,
      resetPassword: authActions.resetPassword.creator.worker,
    }
  )(App)
);
