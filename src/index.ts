import { AppFactory, debounce, LocalAppState, registerAuthListener } from '@makes-apps/lib';
import App, { AppContext, AppLocalKey, AppReducer, AppState } from './app';
import { setUser } from './store/auth';
import { findOne, User } from './store/users';

const factory = new AppFactory(AppState());

const history = factory.createHistory();
const store = factory.createStore(AppReducer(history), AppContext('makes-app-hfbvm'));

store.subscribe(
  debounce(() => {
    LocalAppState.write(AppLocalKey, store.getState().auth);
  }, 500)
);

const renderApp = factory.createRenderer(history, store, 'root', makesTheme =>
  makesTheme({
    primaryColor: 'green',
    secondaryColor: 'blue',
    logoFont: 'Allerta Stencil, serif',
    headingFont: 'Josefin Sans, sans-serif',
    bodyFont: 'Special Elite, serif',
  })
);

registerAuthListener(auth =>
  auth.user
    ? store
        .dispatch<any>(findOne.creator.worker({ email: auth.user.profile.email }))
        .then((user: User | undefined) => store.dispatch(setUser.creator.action(user)))
    : store.dispatch(setUser.creator.action(undefined))
);

renderApp(App);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    const app = require('./app/app');
    renderApp(app);
  });
}
