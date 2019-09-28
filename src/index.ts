import 'core-js';
import 'flatpickr/dist/themes/light.css';

import { debounce, registerAuthListener, AppFactory, LocalAppState } from '@makes-apps/lib';

import App from './app';
import OFFLINE from './offline';
import { rootReducer, RootContext, RootState, LOCAL_KEY } from './root';
import { authActions, usersActions } from './store';

const factory = new AppFactory(RootState());

const history = factory.createHistory();
const store = factory.createStore(rootReducer(history), RootContext(process.env.STITCH_APP_ID || ''));

if (!OFFLINE) {
  store.subscribe(
    debounce(() => {
      const { auth } = store.getState();
      LocalAppState.write(LOCAL_KEY, { user: auth.user });
    }, 500)
  );
}

const renderApp = factory.createRenderer(history, store, 'root');

if (!OFFLINE) {
  registerAuthListener(auth => {
    let userEmail: string | undefined = undefined;

    if (auth.user) {
      userEmail = auth.user.profile.email;
      store.dispatch<any>(usersActions.list({}));
    }
    
    store.dispatch(authActions.setUser.creator.action(userEmail));
  });
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    const app = require('./app/app');
    renderApp(app);
  });
}
