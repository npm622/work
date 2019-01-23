import { buildReducer, newActionHandler } from '../../utils';
import { AdminState, ackAlert, addAlert, setUser } from '.';

export default buildReducer(AdminState(), [
  newActionHandler(setUser, (state, user) => {
    state.user = user;
  }),
  newActionHandler(ackAlert, state => {
    state.alerts.shift();
  }),
  newActionHandler(addAlert, (state, alert) => {
    state.alerts.push(alert);
  }),
]);
