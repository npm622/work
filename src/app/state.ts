import { AuthState, LocalAppState, makesAppState } from '@makes-apps/lib';

import { State as UsersState, User } from '../store/users';

import localKey from './local_key';

const AppState = makesAppState({
  auth: new AuthState<User>(LocalAppState.read(localKey)),
  users: new UsersState(),
});
interface AppState extends ReturnType<typeof AppState> {}

export default AppState;
