import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { RouterState } from 'makes-apps';
import { MakesClientOptions, MakesStitchClient } from 'makes-clients';
import { AdminState, DbState } from '.';
import admin from './admin';
import db from './db';

export const AppState = () => ({
  admin: AdminState(),
  db: DbState(),
  router: RouterState(),
});

export interface AppState extends ReturnType<typeof AppState> {}

export const AsyncContext = (clientAppId: string, options?: MakesClientOptions) => ({
  clients: new MakesStitchClient(clientAppId, false, options),
});

export interface AsyncContext extends ReturnType<typeof AsyncContext> {}

const buildRootReducers: (h: History) => Reducer<AppState> = history =>
  combineReducers({
    admin,
    db,
    router: connectRouter(history),
  });

export default buildRootReducers;
