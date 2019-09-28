import appActions from '../../actions';

import State, { Blog } from '../../types/blogs';

const factory = appActions.app().forNamespace<State>(State.NAMESPACE);

export const { list, get, create, createBatch, update, clear, remove } = appActions.crud<State, Blog>(factory)(dbs =>
  dbs.app().blogs()
);
