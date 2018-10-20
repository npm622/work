import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Stitch } from 'mongodb-stitch-browser-sdk';
import { ClientFactory } from 'mmdb-client-factory';
import { Harness, Icons, Router } from './app';

require('../static/favicon.ico');
require('../static/main.less');

ClientFactory.buildHttp().then(client => {
  new Icons().initialize();

  const app = new Harness(client, Stitch.initializeDefaultAppClient('makes-app-hfbvm'));

  const renderApp = (Component: typeof Router) =>
    render(
      <Provider store={app.store}>
        <AppContainer>
          <Component history={app.history} />
        </AppContainer>
      </Provider>,
      document.getElementById('root')
    );

  renderApp(Router);

  if (module.hot) {
    module.hot.accept('./app/Router', () => {
      const appRouter = require('./app/Router');
      renderApp(appRouter);
    });
  }
});
