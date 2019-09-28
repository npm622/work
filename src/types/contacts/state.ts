import { BaseMongoCrudState } from '@makes-apps/lib';

import { Contact } from './contact';

class State extends BaseMongoCrudState<Contact> {
  static NAMESPACE = 'contacts';
}

export default State;
