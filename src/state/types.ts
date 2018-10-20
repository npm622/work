import { HttpClient } from 'mmdb-client-factory';
import { RouterState } from 'connected-react-router';
import { StitchAppClient } from 'mongodb-stitch-browser-sdk';
import { initialSessionState, SessionState } from '.';

export interface AsyncContext {
  http: HttpClient;
  stitch: StitchAppClient;
}

export interface AppState {
  session: SessionState;
  router: RouterState;
}

export const initialAppState: AppState = {
  session: initialSessionState,
  router: {
    location: { pathname: '', search: '', state: {}, hash: '' },
    action: 'PUSH',
  },
};
