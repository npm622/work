import { makesRootReducer } from '@makes-apps/lib';

import AuthReducer from '../store/auth';
import UsersReducer from '../store/users';

export default makesRootReducer({
  auth: AuthReducer,
  users: UsersReducer,
});
