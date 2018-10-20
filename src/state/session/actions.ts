import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import {
  StitchUser,
  StitchServiceError,
  UserPasswordCredential
} from 'mongodb-stitch-browser-sdk';
import { AppState, AsyncContext, EmailPassword } from '..';

const create = actionCreatorFactory('session');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const setUser = create<StitchUser | undefined>('set user');

export const login = createAsync<EmailPassword, StitchUser, StitchServiceError>(
  'login',
  ({email, password}, _dispatch, _getState, { stitch }) =>
    stitch.auth.loginWithCredential(new UserPasswordCredential(email, password))
);

export const logout = createAsync(
  'logout',
  (_params, _dispatch, _getState, { stitch }) => stitch.auth.logout()
);
