import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { AppState } from '.';
import adminReducer from './admin/reducer';

const buildRootReducers: (h: History) => Reducer<AppState> = history => combineReducers({
  admin: adminReducer,
  router: connectRouter(history)
});

export default buildRootReducers;
