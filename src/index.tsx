import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Stitch } from 'mongodb-stitch-browser-sdk';
import Bootstrap from './bootstrap';
import Icons from './icons';
import Router from './router';

require('../static/favicon.ico');
require('../static/main.less');

new Icons().initialize();

const app = new Bootstrap(Stitch.initializeDefaultAppClient('makes-app-hfbvm'));

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
  module.hot.accept('./router', () => {
    const appRouter = require('./router');
    renderApp(appRouter);
  });
}
