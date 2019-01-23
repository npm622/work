import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { urls } from '../../utils';

interface Props extends RouteProps {
  user?: StitchUser;
  permit?: (user?: StitchUser) => boolean;
  redirectTo?: string;
}

const AuthRoute = ({ user, permit = user => !!user, redirectTo, component: Component, render, ...rest }: Props) => (
  <Route
    {...rest}
    render={props => {
      if (permit(user)) {
        if (Component) {
          return <Component {...props} />;
        }
        if (render) {
          return render(props);
        }
      }
      return (
        <Redirect
          to={{
            pathname: redirectTo || urls.login(),
          }}
        />
      );
    }}
  />
);

export default AuthRoute;
