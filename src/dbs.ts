import { RootContext } from './root';
import { Blog, Contact, User } from './types';

export default (stitch: RootContext) => {
  return {
    app: () => {
      const db = stitch.clients().db('makes-data', 'app');
      return {
        blogs: () => db.collection<Blog>('blogs'),
        contacts: () => db.collection<Contact>('contacts'),
      };
    },
    auth: () => {
      const db = stitch.clients().db('makes-data', 'auth');
      return {
        users: () => db.collection<User>('users'),
      };
    },
  };
};
