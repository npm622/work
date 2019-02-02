import { buildReducer, newAsyncActionHandler } from '../../utils';
import { DbState, addContact } from '.';

export default buildReducer(DbState(), [
  newAsyncActionHandler(addContact.async, {
    onSuccess: (state, { params: contact, result }) => {
      contact._id = result.insertedId;
      state.contacts.push(contact);
    },
  }),
]);
