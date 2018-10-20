import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { ErrorBoundary, Header, Sidebar, Content, Footer } from '../view/components';

export default class Router extends React.Component<any> {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <div className="app">
            <Header />
            <div className="app-main">
              <Sidebar />
              <Content />
            </div>
            <Footer />
          </div>
        </ErrorBoundary>
      </ConnectedRouter>
    );
  }
}
