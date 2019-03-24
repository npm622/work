import { buildReducer, newAsyncActionHandler } from '../../utils';
import { addContact } from './actions';
import { DbState } from './types';

export default buildReducer(DbState(), [
  newAsyncActionHandler(addContact.async, {
    onSuccess: (state, { params: contact, result }) => {
      contact._id = result.insertedId;
      state.contacts.push(contact);
    },
  }),
]);
