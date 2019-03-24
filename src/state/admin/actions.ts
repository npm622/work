import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { StitchUser, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { Alert, AppState, AsyncContext, EmailPassword, TokenData, VerifiedTokenData } from '..';
import { authClient, asyncActionExecutor } from '../../utils';

const create = actionCreatorFactory('admin');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const setLoading = create<boolean>('set loading');

export const setUser = create<StitchUser | undefined>('set user');

export const login = createAsync<EmailPassword, StitchUser>(
  'login',
  ({ email, password }, dispatch, _getState, { clients: { stitch } }) =>
    asyncActionExecutor(dispatch, () => stitch.auth.loginWithCredential(new UserPasswordCredential(email, password)))(
      () => 'successfully logged in'
    )
);

export const logout = createAsync('logout', (_params, dispatch, _getState, { clients: { stitch } }) =>
  asyncActionExecutor(dispatch, () => stitch.auth.logout())(() => 'successfully logged out')
);

export const register = createAsync<EmailPassword, void>(
  'register',
  ({ email, password }, dispatch, _getState, { clients: { stitch } }) =>
    asyncActionExecutor(dispatch, () => authClient(stitch).registerWithEmail(email, password))(
      () => `a confirmation email has been sent to ${email}`
    )
);

export const resendConfirmationEmail = createAsync<string, void>(
  'resned confirmation email',
  (email, dispatch, _getState, { clients: { stitch } }) =>
    asyncActionExecutor(dispatch, () => authClient(stitch).resendConfirmationEmail(email))(
      () => `a confirmation email has been re-sent to ${email}`
    )
);

export const confirmEmail = createAsync<TokenData, void>(
  'confirm email',
  ({ token, tokenId }, dispatch, _getState, { clients: { stitch } }) =>
    asyncActionExecutor(dispatch, () => authClient(stitch).confirmUser(token, tokenId))(
      () => `successfully confirmed email`
    )
);

export const sendPasswordResetEmail = createAsync<string, void>(
  'send password reset email',
  (email, dispatch, _getState, { clients: { stitch } }) =>
    asyncActionExecutor(dispatch, () => authClient(stitch).sendResetPasswordEmail(email))(
      () => `a password reset email has been sent to ${email}`
    )
);

export const resetPassword = createAsync<VerifiedTokenData, void>(
  'reset password',
  ({ password, token, tokenId }, dispatch, _getState, { clients: { stitch } }) =>
    asyncActionExecutor(dispatch, () => authClient(stitch).resetPassword(token, tokenId, password))(
      () => `successfully reset password`
    )
);

export const addAlert = create<Alert>('add alert');
export const ackAlert = create('ack alert');
