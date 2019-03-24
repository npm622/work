import { StitchAuth } from 'mongodb-stitch-browser-sdk';
import { appRenderer, AppStager } from 'makes-apps';
import buildRootReducers, { appIcons, AppState, AsyncContext, setUser } from './state';
import Router from './router';

// load assets

require('../static/favicon.ico');
require('../static/main.less');

// build app infrastructure

const asyncContext = AsyncContext('makes-app-hfbvm');
const { clients: stitch } = asyncContext;

const { history, store } = new AppStager(AppState(), asyncContext)
  .withIcons(...appIcons)
  .withHistory()
  .withReducers(history => buildRootReducers(history!))
  .setup();

// handle auth

const dispatchSetUser = ({ user }: StitchAuth) => store!.dispatch(setUser(user));

dispatchSetUser(stitch.auth());
stitch.registerAuthListener(dispatchSetUser);

// handle rendering

const renderApp = appRenderer('root', history!, store!);

renderApp(Router);

if (module.hot) {
  module.hot.accept('./router', () => {
    const router = require('./router');
    renderApp(router);
  });
}
