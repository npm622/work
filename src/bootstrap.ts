import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { applyMiddleware, createStore, compose, Middleware, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { StitchAppClient, StitchAuth } from 'mongodb-stitch-browser-sdk';
import { isProd, publicUrl } from './utils';
import { AppState, setUser } from './state';
import buildRootReducers from './state/reducers';

export default class Bootstrap {
  public history: History;
  private middlewares: Middleware[];
  public store: Store<AppState>;

  constructor(stitch: StitchAppClient) {
    this.history =
      typeof window !== 'undefined' ? createBrowserHistory({ basename: publicUrl }) : createMemoryHistory();

    this.middlewares = [routerMiddleware(this.history), thunk.withExtraArgument({ stitch })];

    let composeEnhancers: <R>(a: R) => R;
    if (isProd()) {
      composeEnhancers = compose;
    } else {
      this.setupLoggerMiddleware();
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    this.store = createStore(
      buildRootReducers(this.history),
      AppState(),
      composeEnhancers(applyMiddleware(...this.middlewares))
    );

    const dispatchSetUser = (auth: StitchAuth) => this.store.dispatch(setUser(auth.user))

    dispatchSetUser(stitch.auth);
    stitch.auth.addAuthListener({ onAuthEvent: dispatchSetUser });
  }

  setupLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(createLogger({ duration: true }));
  }
}
