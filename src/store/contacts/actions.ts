import appActions from '../../actions';

import { Contact, ContactsState } from '../../types/contacts';

const factory = appActions.app().forNamespace<ContactsState>(ContactsState.NAMESPACE);

export const { list, get, create, createBatch, update, clear, remove } = appActions.crud<ContactsState, Contact>(
  factory
)(dbs => dbs.app().contacts(), 'contacts');
