import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { urls } from '../../utils';
import {
  AuthRoute,
  // About,
  ConfirmationEmail,
  ConfirmEmail,
  Contact,
  Home,
  Login,
  NotFound,
  PasswordReset,
  Register,
  ResetPassword,
  Sidebar,
  WaitingRoom,
  Welcome,
} from '..';

interface Props {
  activePath: string;
  gotoAbout: () => void;
  gotoContact: () => void;
  gotoHome: () => void;
  user?: StitchUser;
}

// const APP_ROUTES = [urls.home(), urls.about(), urls.contact()];

const hasSidebar = (activePath: string) => {
  switch (activePath) {
    case 'home':
    case 'contact':
      return true;
  }
  return false;
};

const View = ({ activePath, gotoAbout, gotoContact, gotoHome, user }: Props) => {
  return (
    <div className="app-view">
      {hasSidebar(activePath) && (
        <Sidebar activePath={activePath} gotoAbout={gotoAbout} gotoContact={gotoContact} gotoHome={gotoHome} />
      )}
      <div className="app-content">
        <Switch>
          <Route exact path={urls.welcome()} component={Welcome} />
          <Route path={urls.login()} component={Login} />
          <Route path={urls.register()} component={Register} />
          <Route path={urls.confirmationEmail()} component={ConfirmationEmail} />
          <Route path={urls.passwordResetEmail()} component={PasswordReset} />
          <Route path={urls.confirmEmail()} component={ConfirmEmail} />
          <Route path={urls.resetPassword()} component={ResetPassword} />
          <Route path={urls.waitingRoom().route()} render={props => <WaitingRoom email={props.match.params.email} />} />
          <AuthRoute user={user} path={urls.home()} component={Home} />
          <AuthRoute user={user} path={urls.contact()} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default View;
