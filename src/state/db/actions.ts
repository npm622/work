import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { RemoteInsertOneResult } from 'mongodb-stitch-browser-sdk';
import { Alert, AppState, AsyncContext, Contact } from '..';
import { appDb, asyncActionExecutor } from '../../utils';

const create = actionCreatorFactory('db');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const addContact = createAsync<Contact, RemoteInsertOneResult>(
  'add contact',
  (contact, dispatch, _getState, { clients: { stitch } }) =>
    asyncActionExecutor(dispatch, () =>
      appDb(stitch)
        .collection<Contact>('contacts')
        .insertOne(contact)
    )(() => Alert('success', 'Successfully submitted contact form', 0))
);
