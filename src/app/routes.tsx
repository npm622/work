import React from 'react';
import { Database, Loadable, Switch, Route } from '@makes-apps/lib';

import { User } from '../types';
import urls from '../urls';

const WelcomePage = Loadable(() => import('../pages').then(module => module.WelcomePage));
const HomePage = Loadable(() => import('../pages').then(module => module.HomePage));
const ProfilePage = Loadable(() => import('../pages').then(module => module.ProfilePage));
const ContactPage = Loadable(() => import('../pages').then(module => module.ContactPage));
const ThoughtsPage = Loadable(() => import('../pages').then(module => module.ThoughtsPage));
const LoginPage = Loadable(() => import('@makes-apps/lib').then(module => module.DashboardLoginPage));
const RegisterPage = Loadable(() => import('@makes-apps/lib').then(module => module.DashboardRegisterPage));
const EmailConfirmationPage = Loadable(() =>
  import('@makes-apps/lib').then(module => module.DashboardEmailConfirmationPage)
);
const PasswordResetPage = Loadable(() => import('@makes-apps/lib').then(module => module.DashboardPasswordResetPage));
const ConfirmEmailPage = Loadable(() => import('@makes-apps/lib').then(module => module.DashboardConfirmEmailPage));
const ResetPasswordPage = Loadable(() => import('@makes-apps/lib').then(module => module.DashboardResetPasswordPage));
const NotFoundPage = Loadable(() => import('@makes-apps/lib').then(module => module.NotFoundPage));

interface Props {
  userEmail?: string;
  users: Database<User>;
  login: (email: string, password: string) => Promise<any>;
  register: (email: string, password: string) => Promise<void>;
  sendConfirmationEmail: (email: string) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  confirmEmail: (token: string, tokenId: string) => Promise<void>;
  resetPassword: (token: string, tokenId: string, password: string) => Promise<void>;
}

const Routes = ({
  userEmail,
  users,
  login,
  register,
  sendConfirmationEmail,
  sendPasswordResetEmail,
  confirmEmail,
  resetPassword,
}: Props) => {
  return (
    <Switch homeUrl={urls.home()} loginUrl={urls.login()} userEmail={userEmail} users={users}>
      <Route exact access="open" path={urls.welcome()} component={WelcomePage} />
      <Route exact path={urls.home()} component={HomePage} />
      <Route exact path={urls.profile()} component={ProfilePage} />
      <Route exact path={urls.contact()} component={ContactPage} />
      <Route path={urls.blogs().list()} component={ThoughtsPage} />
      <Route
        access="reverse"
        path={urls.login()}
        render={() => (
          <LoginPage
            login={login}
            urls={{
              register: urls.register(),
              passwordReset: urls.passwordReset(),
              confirmation: urls.emailConfirmation(),
            }}
          />
        )}
      />
      <Route
        access="open"
        path={urls.register()}
        render={() => (
          <RegisterPage
            register={register}
            urls={{
              login: urls.login(),
              passwordReset: urls.passwordReset(),
              confirmation: urls.emailConfirmation(),
            }}
          />
        )}
      />
      <Route
        access="reverse"
        path={urls.emailConfirmation()}
        render={() => (
          <EmailConfirmationPage
            sendEmailConfirmation={sendConfirmationEmail}
            urls={{ login: urls.login(), register: urls.register() }}
          />
        )}
      />
      <Route
        access="open"
        path={urls.passwordReset()}
        render={() => (
          <PasswordResetPage
            sendPasswordReset={sendPasswordResetEmail}
            urls={{ login: urls.login(), register: urls.register() }}
            userEmail={userEmail}
          />
        )}
      />
      <Route
        access="reverse"
        path={urls.confirmEmail()}
        render={({ location }) => (
          <ConfirmEmailPage search={location.search} confirmEmail={confirmEmail} urls={{ login: urls.login() }} />
        )}
      />
      <Route
        access="open"
        path={urls.resetPassword()}
        render={({ location }) => (
          <ResetPasswordPage
            search={location.search}
            resetPassword={resetPassword}
            urls={{ home: urls.welcome(), user: urls.profile() }}
          />
        )}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
