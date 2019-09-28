import { makesRootReducer } from '@makes-apps/lib';

import { authReducer, blogsReducer, contactsReducer, usersReducer } from '../store';

export default makesRootReducer({
  auth: authReducer,
  blogs: blogsReducer,
  contacts: contactsReducer,
  users: usersReducer,
});
