import { RootContext } from './root';
import { Blog, Contact, User } from './types';

export default (stitch: RootContext) => {
  const dbProvider = (name: string) => stitch.clients().db('makes-data', name);
  return {
    app: () => {
      const db = dbProvider('app');
      return {
        blogs: () => db.collection<Blog>('blogs'),
        contacts: () => db.collection<Contact>('contacts'),
      };
    },
    auth: () => {
      const db = dbProvider('auth');
      return {
        users: () => db.collection<User>('users'),
      };
    },
  };
};
