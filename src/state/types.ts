import { RouterState } from 'connected-react-router';
import { StitchAppClient } from 'mongodb-stitch-browser-sdk';
import { AdminState, DbState } from '.';

export interface AsyncContext {
  stitch: StitchAppClient;
}

export const AppState = () => ({
  admin: AdminState(),
  db: DbState(),
  router: {
    location: { pathname: '', search: '', state: {}, hash: '' },
    action: 'PUSH',
  } as RouterState,
});

export interface AppState extends ReturnType<typeof AppState> {}
