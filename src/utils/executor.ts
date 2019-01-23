import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { addAlert, Alert, AppState, AsyncContext, setLoading } from '../state';

export const asyncActionExecutor = <T>(
  dispatch: ThunkDispatch<AppState, AsyncContext, AnyAction>,
  thunkCreator: () => Promise<T>
) => async (
  successAlert?: (res: T) => string | { message: string; ackTime?: number },
  errorAlert?: (err: Error) => string
) => {
  dispatch(setLoading(true));

  try {
    const res = await thunkCreator();
    if (successAlert) {
      const alert = successAlert(res);
      if (typeof alert === 'string') {
        dispatch(addAlert(Alert('success', alert, 2500)));
      } else {
        const { message, ackTime } = alert;
        dispatch(addAlert(Alert('success', message, ackTime)));
      }
    }

    dispatch(setLoading(false));

    return res;
  } catch (err) {
    if (errorAlert) {
      dispatch(addAlert(Alert('error', errorAlert(err))));
    } else {
      const { name, message } = err;
      dispatch(addAlert(Alert('error', `${name}: ${message}`)));
    }

    dispatch(setLoading(false));

    throw err;
  } /* finally {
    // TODO: dispatch(setLoading(false));
  }*/
};
