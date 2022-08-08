import 'core-js';
import 'flatpickr/dist/themes/light.css';

import { registerAuthListener, AppFactory, LocalAppState } from '@makes-apps/lib';

import App from './app';
import OFFLINE from './offline';
import { rootReducer, RootContext, RootState, LOCAL_KEY } from './root';
import { authActions, usersActions } from './store';
import { User } from './types';

const factory = new AppFactory(RootState());

const history = factory.createHistory();
const store = factory.createStore(rootReducer(history), RootContext());

const renderApp = factory.createRenderer(history, store, 'root');

if (!OFFLINE) {
  registerAuthListener(auth => {
    if (auth.user) {
      const userEmail = auth.user.profile.email;

      store.dispatch<any>(usersActions.list({})).then(() => {
        const user = Object.values<User>(store.getState().users.db || {}).find(({ email }) => email === userEmail);

        store.dispatch<any>(authActions.setUser.creator.action(user));
        LocalAppState.write(LOCAL_KEY, { user });
      });
    } else {
      store.dispatch(authActions.setUser.creator.action(undefined));
      LocalAppState.write(LOCAL_KEY, {});
    }
  });
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    const app = require('./app/app');
    renderApp(app);
  });
}
