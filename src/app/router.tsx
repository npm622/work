import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

// TODO: add view stuff
import {
  ErrorBoundary,
  ErrorBoundaryRoute,
  Header,
  Sidebar,
  Footer,
  Home,
  About,
  Login,
  Contact,
  NotFound,
  Welcome,
} from '../view';
import { urls } from '../util';

export default class Router extends React.Component<any> {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <div className="app">
            <Header />
            <div className="app-dashboard">
              <Sidebar />
              <div className="app-content">
                <Switch>
                  <Route exact path={urls.welcome()} component={Welcome} />
                  <ErrorBoundaryRoute path={urls.login()} render={Login} />
                  <Route path={urls.about()} component={About} />
                  <Route path={urls.contact()} component={Contact} />
                  <Route path={urls.home()} component={Home} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </ErrorBoundary>
      </ConnectedRouter>
    );
  }
}
