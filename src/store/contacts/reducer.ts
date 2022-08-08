import { makesSliceReducer } from '@makes-apps/lib';

import { ContactsState } from '../../types/contacts';

import * as actions from './actions';

export default makesSliceReducer(ContactsState.NAMESPACE, new ContactsState(), actions);
