import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { AppState } from '.';
import adminReducer from './admin/reducer';
import dbReducer from './db/reducer';

const buildRootReducers: (h: History) => Reducer<AppState> = history => combineReducers({
  admin: adminReducer,
  db: dbReducer,
  router: connectRouter(history)
});

export default buildRootReducers;
