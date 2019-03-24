import React from 'react';
import { Switch } from 'react-router';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { RootErrorBoundary } from '../../components/error';
import { User } from '../../store/auth/types';

interface ChildProps<U extends User> {
  noErrorBoundary?: boolean;
  redirects?: { standard: string; reverse: string };
  stitch?: StitchUser;
  user: U | null;
}

interface Props<U extends User> extends ChildProps<U> {
  children: React.ReactNode;
}

const AuthenticatedRoutes = <U extends User>({ children, noErrorBoundary, redirects, stitch, user }: Props<U>) => {
  const routes = (
    <Switch>
      {React.Children.map(children, elem => {
        if (React.isValidElement<ChildProps<U>>(elem)) {
          return React.cloneElement(elem, { redirects, stitch, user });
        }
        return null;
      }).filter(elem => !!elem)}
    </Switch>
  );

  if (noErrorBoundary) {
    return routes;
  }
  return <RootErrorBoundary>{routes}</RootErrorBoundary>;
};

export default AuthenticatedRoutes;
