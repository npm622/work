import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { ClientFactory } from 'mmdb-client-factory';
import { Harness, Icons, Router } from './app';

require('../static/favicon.ico');
require('../static/main.less');

// TODO: extract url and credentials to env vars
ClientFactory.buildHttp().then(client => {
  new Icons().doInit();
  
  const app = new Harness(client, process.env);

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

  if ((module as any).hot) {
    (module as any).hot.accept('./app/router', () => {
      const appRouter = require('./app/router');
      renderApp(appRouter);
    });
  }
});
