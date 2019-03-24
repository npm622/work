import makeActions from '../actions';
import { AdminState, Alert, AlertParams, Background } from './types';

export default <STATE extends {}, CONTEXT extends {}>() => {
  const actionFactory = makeActions<STATE, CONTEXT>().forNamespace<AdminState>('admin');
  return {
    startWork: actionFactory
      .withType('start work')
      .withoutPayload()
      .withReducer(state => ({ ...state, working: state.working + 1 })),

    endWork: actionFactory
      .withType('end work')
      .withoutPayload()
      .withReducer(state => ({ ...state, working: state.working > 0 ? state.working - 1 : 0 })),

    ackAlert: actionFactory
      .withType('ack alert')
      .withoutPayload()
      .withReducer(state => ({ ...state, alerts: state.alerts.slice(1) })),

    addAlert: actionFactory
      .withType('add alert')
      .withArgs<AlertParams, Alert>((type, message, options) => Alert(type, message, options))
      .withReducer((state, { payload }) => ({ ...state, alerts: state.alerts.concat(payload) })),

    setBackground: actionFactory
      .withType('setBackground')
      .withPayload<Background>()
      .withReducer((state, { payload: background }) => ({ ...state, background })),
  };
};
