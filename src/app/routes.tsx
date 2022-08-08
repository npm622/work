import React from 'react';
import { AuthActions, DashboardRoutes, Loadable, Route } from '@makes-apps/lib';

import { User } from '../types';
import urls from '../urls';

const WelcomePage = Loadable(() => import('../pages').then(module => module.WelcomePage));
const HomePage = Loadable(() => import('../pages').then(module => module.HomePage));
const ProfilePage = Loadable(() => import('../pages').then(module => module.ProfilePage));
const ContactPage = Loadable(() => import('../pages').then(module => module.ContactPage));
const ThoughtsPage = Loadable(() => import('../pages').then(module => module.ThoughtsPage));

interface Props {
  authActions: AuthActions;
  user?: User;
}

const Routes = ({ authActions, user }: Props) => {
  return (
    <>
      <DashboardRoutes
        authActions={authActions}
        authUrls={urls.auth()}
        homeUrl={urls.home()}
        user={user}
        omitErrorBoundary
        welcomeUrl={urls.welcome()}
      >
        <Route exact access="open" path={urls.welcome()} component={WelcomePage} />
        <Route exact path={urls.home()} component={HomePage} />
        <Route exact path={urls.profile()} component={ProfilePage} />
        <Route exact path={urls.contact()} component={ContactPage} />
        <Route path={urls.blogs().finder()} render={props => <ThoughtsPage {...props} />} />
      </DashboardRoutes>
    </>
  );
};

export default Routes;
