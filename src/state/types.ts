import { HttpClient } from 'mmdb-client-factory';
import { RouterState } from 'connected-react-router';

export interface AsyncContext {
  apgClient: HttpClient;
  env: string;
}

export const initialAppState: AppState = {};

export interface AppState {
  router?: RouterState;
}
