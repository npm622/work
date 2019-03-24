import { push } from 'connected-react-router';
import makeActions from '../actions';

export default <STATE extends {}, CONTEXT extends {}>() => {
  const actionFactory = makeActions<STATE, CONTEXT>().forNamespace('location');
  return {
    goto: actionFactory.withType('goto').asThunk((url: string) => dispatch => dispatch(push(url))),
  };
};
