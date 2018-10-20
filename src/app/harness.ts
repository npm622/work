import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { applyMiddleware, createStore, compose, Middleware, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { HttpClient } from 'mmdb-client-factory';
import { AppState, reducers, initialAppState } from '../state';

const ENV_PROD = 'production';

export default class Harness {
  public history: History;
  private middlewares: Middleware[];
  public store: Store<AppState>;

  constructor(public client: HttpClient, public env: ProcessEnv) {
    this.history =
      typeof window !== 'undefined' ? createBrowserHistory({ basename: env.PUBLIC_URL }) : createMemoryHistory();
    this.middlewares = [routerMiddleware(this.history), thunk.withExtraArgument({ http: {}, env })];

    let composeEnhancers: <R>(a: R) => R;
    if (this.env.NODE_ENV !== ENV_PROD) {
      this.setupLoggerMiddleware();
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
      composeEnhancers = compose;
    }

    this.store = createStore(
      connectRouter(this.history)(reducers),
      initialAppState,
      composeEnhancers(applyMiddleware(...this.middlewares))
    );
  }

  setupLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(createLogger({ duration: true }));
  }
}
