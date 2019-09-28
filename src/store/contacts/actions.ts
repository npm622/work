import appActions from '../../actions';

import State, { Contact } from '../../types/contacts';

const factory = appActions.app().forNamespace<State>(State.NAMESPACE);

export const { list, get, create, createBatch, update, clear, remove } = appActions.crud<State, Contact>(factory)(dbs =>
  dbs.app().contacts()
);
