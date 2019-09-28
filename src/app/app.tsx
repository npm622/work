import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { adminActions, findUser, Alert, AppProvider, Database } from '@makes-apps/lib';

import { LogoDark, LogoLight } from '../components/svg';
import connectors from '../connectors';
import { authActions } from '../store';
import { User } from '../types';
import urls from '../urls';

import Routes from './routes';

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  alerts: Alert[];
  userEmail?: string;
  users: Database<User>;
  working: number;
}

interface DispatchProps {
  ackAlert: () => void;
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
      userEmail,
      users,
      working,
    } = this.props;
    if (userEmail && !users) {
      return <>loading awesomeness ... please stand by</>;
    }
    const user = findUser(userEmail, users);
    return (
      <AppProvider
        name="makes-apps"
        options={{
          primaryColor: 'green',
          secondaryColor: 'blue',
          logoFont: 'Fredericka the Great, serif',
          headingFont: 'Oswald, sans-serif',
          bodyFont: 'Quattrocento, serif',
        }}
      >
        {LayoutProvider => (
          <LayoutProvider>
            {({ DashboardLayout }) => (
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
                emailConfirmationlUrl={urls.emailConfirmation()}
                loginUrl={urls.login()}
                logo={{
                  to: urls.welcome(),
                  render: ({ themeMode }) => (themeMode === 'light' ? <LogoDark /> : <LogoLight />),
                }}
                logout={() => logout()}
                mantra="don't let money change ya"
                navbar={[
                  { as: 'link', to: urls.home(), label: 'home' },
                  { as: 'link', to: urls.contact(), label: 'contact' },
                  { as: 'link', to: urls.blogs().list(), label: 'thoughts' },
                ]}
                passwordResetUrl={urls.passwordReset()}
                profileUrl={urls.profile()}
                registerUrl={urls.register()}
                user={user}
                working={working > 0}
              >
                <Routes
                  userEmail={userEmail}
                  users={users}
                  login={login}
                  register={register}
                  sendConfirmationEmail={sendEmailConfirmation}
                  sendPasswordResetEmail={sendPasswordReset}
                  confirmEmail={confirmEmail}
                  resetPassword={resetPassword}
                />
              </DashboardLayout>
            )}
          </LayoutProvider>
        )}
      </AppProvider>
    );
  }
}

export default withRouter(
  connectors.withDispatchObject(
    ({ admin, auth, users }) => ({
      alerts: admin.alerts,
      userEmail: auth.userEmail,
      users: users.db,
      working: admin.working,
    }),
    {
      ackAlert: adminActions.ackAlert.creator.action,
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
