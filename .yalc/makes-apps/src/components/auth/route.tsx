import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { User } from '../../store/auth/types';

interface Props<U extends User> extends RouteProps {
  user?: U;
  stitch?: StitchUser;
  open?: boolean;
  permit?: (api: ReturnType<typeof protectionApi>) => boolean;
  redirects?: { standard: string; reverse: string };
  redirectTo?: string;
  reverse?: boolean;
  type?: string;
}

const protectionApi = <U extends User>(user?: U, stitch?: StitchUser) => ({
  user,
  stitch,
  hasRole: (type: string) => (stitch && (!user || isUserQualified(type, user && user.type))) || false,
});

const userTypes = { user: 0, admin: 1, me: 2 } as { [key: string]: number };
const isUserQualified = (targetType: string, userType = '') => {
  const targetScore = userTypes[targetType] || 0;
  const userScore = userTypes[userType] || -1;
  return userScore >= targetScore;
};

const AuthRoute = <U extends User>({
  user,
  stitch,
  open,
  permit,
  redirectTo,
  redirects,
  reverse,
  type,
  component: Component,
  render,
  ...rest
}: Props<U>) => {
  let answer = (stitch && !reverse) || (!stitch && reverse);
  if (type && user) {
    answer = isUserQualified(type, user.type);
  }
  if (permit) {
    answer = permit(protectionApi(user, stitch));
  }
  return (
    <Route
      {...rest}
      render={props => {
        if (open || answer) {
          if (Component) {
            return <Component {...props} />;
          }
          if (render) {
            return render(props);
          }
        }
        return <Redirect to={redirectTo || (redirects ? (reverse ? redirects.reverse : redirects.standard) : '')} />;
      }}
    />
  );
};

export default AuthRoute;
