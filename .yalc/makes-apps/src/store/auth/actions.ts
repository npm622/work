import { StitchUser } from 'mongodb-stitch-browser-sdk';
import makeActions from '../actions';
import { AnyAction } from '../actions/action';
import { AlertParams } from '../admin/types';
import { User } from './types';

interface AdminActions {
  addAlert: (...args: AlertParams) => AnyAction;
  startWork: () => AnyAction;
  endWork: () => AnyAction;
}

interface AuthActions<CONTEXT extends {}, USER extends User> {
  (context: CONTEXT): {
    fetchUser: (email: string) => Promise<USER | null>;
    login: (email: string, password: string) => Promise<StitchUser>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    sendConfirmationEmail: (email: string) => Promise<void>;
    sendPasswordResetEmail: (email: string) => Promise<void>;
    confirmEmail: (token: string, tokenId: string) => Promise<void>;
    resetPassword: (token: string, tokenId: string, password: string) => Promise<void>;
  };
}

export default <STATE extends {}, CONTEXT extends {}, USER extends User>(
  adminActions: AdminActions,
  authActions: AuthActions<CONTEXT, USER>
) => {
  const actionFactory = makeActions<STATE, CONTEXT>(adminActions).forNamespace('auth');
  return {
    setUser: actionFactory
      .withType('set user')
      .withPayload<StitchUser | undefined>()
      .withReducer((state, { payload: stitch }) => ({ ...state, stitch })),

    fetchUser: actionFactory
      .withType('fetch user')
      .asThunk(
        (email: string) => (_dispatch, _getState, context) => authActions(context).fetchUser(email),
        ({ args: [email], payload }) =>
          payload ? `Successfully retrieved user data for ${email}` : `Found no user data for ${email}`
      )
      .withReducer((state, { payload: user, status }) => {
        if (status === 'success') {
          return { ...state, user };
        }
        return state;
      }),
    login: actionFactory
      .withType('login')
      .asThunk(
        (email: string, password: string) => (_dispatch, _getState, context) =>
          authActions(context).login(email, password),
        ({ args: [email] }) => `Welcome back, ${email}`
      ),

    logout: actionFactory
      .withType('logout')
      .asThunk(
        () => (_dispatch, _getState, context) => authActions(context).logout(),
        'You have successfully logged out. We hope to see you soon!'
      ),

    register: actionFactory
      .withType('register')
      .asThunk(
        (email: string, password: string) => (_dispatch, _getState, context) =>
          authActions(context).register(email, password),
        ({ args: [email] }) =>
          `An email has been sent to your inbox (${email}) containing a link to confirm your email address.`
      ),

    sendConfirmationEmail: actionFactory
      .withType('send confirmation email')
      .asThunk(
        (email: string) => (_dispatch, _getState, context) => authActions(context).sendConfirmationEmail(email),
        ({ args: [email] }) =>
          `An email has been sent to your inbox (${email}) containing a link to confirm your email address.`
      ),

    sendPasswordResetEmail: actionFactory
      .withType('send password reset email')
      .asThunk(
        (email: string) => (_dispatch, _getState, context) => authActions(context).sendPasswordResetEmail(email),
        ({ args: [email] }) =>
          `An email has been sent to your inbox (${email}) containing a link to reset your password.`
      ),

    confirmEmail: actionFactory
      .withType('confirm email')
      .asThunk(
        (token: string, tokenId: string) => (_dispatch, _getState, context) =>
          authActions(context).confirmEmail(token, tokenId),
        `Thank you for confirming your email address with us. Welcome to Gramma's Kitchen!`
      ),

    resetPassword: actionFactory
      .withType('reset password')
      .asThunk(
        (token: string, tokenId: string, password: string) => (_dispatch, _getState, context) =>
          authActions(context).resetPassword(token, tokenId, password),
        'You have successfully changed your password.'
      ),
  };
};
