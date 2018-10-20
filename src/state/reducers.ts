import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { AppState } from '.';
import sessionReducer from './session/reducer';

const buildRootReducers: (h: History) => Reducer<AppState> = history => combineReducers({
  session: sessionReducer,
  router: connectRouter(history)
});

export default buildRootReducers;
