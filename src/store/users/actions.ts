import appActions from '../../actions';

import State, { User } from '../../types/users';

const factory = appActions.app().forNamespace<State>(State.NAMESPACE);

export const { list, get, create, createBatch, update, clear, remove } = appActions.crud<State, User>(factory)(dbs =>
  dbs.auth().users()
);
