import React from 'react';
import { Route, RouteProps } from 'react-router';
import { ErrorBoundary } from '.';

const ErrorBoundaryRoute = (props: RouteProps) => (
  <ErrorBoundary>
    <Route {...props} />
  </ErrorBoundary>
);

export default ErrorBoundaryRoute;
