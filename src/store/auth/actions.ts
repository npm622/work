import { adminActions, makesAuthActions } from '@makes-apps/lib';
import { UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

import { RootContext, RootState } from '../../root';
import { User } from '../../types/users';

export const {
  setUser,
  login,
  logout,
  register,
  sendConfirmationEmail,
  sendPasswordResetEmail,
  confirmEmail,
  resetPassword,
} = makesAuthActions<RootState, RootContext, User>(
  'makes.life',
  {
    addAlert: adminActions.addAlert,
    startWork: adminActions.startWork,
    endWork: adminActions.endWork,
  },
  stitch => ({
    login: (email: string, password: string) =>
      stitch.stitch.auth.loginWithCredential(new UserPasswordCredential(email, password)),
    logout: () => stitch.stitch.auth.logout(),
    register: (email: string, password: string) => stitch.clients().emailPassword.registerWithEmail(email, password),
    sendConfirmationEmail: (email: string) => stitch.clients().emailPassword.resendConfirmationEmail(email),
    sendPasswordResetEmail: (email: string) => stitch.clients().emailPassword.sendResetPasswordEmail(email),
    confirmEmail: (token: string, tokenId: string) => stitch.clients().emailPassword.confirmUser(token, tokenId),
    resetPassword: (token: string, tokenId: string, password: string) =>
      stitch.clients().emailPassword.resetPassword(token, tokenId, password),
  })
);
