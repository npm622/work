import { MongoCrudActions } from '@makes-apps/lib';

import { Contact } from '../../types/contacts';

import * as actions from './actions';

export type ContactsActions = MongoCrudActions<Contact>;

export const contactsActions = {
  list: actions.list.creator.worker,
  get: actions.get.creator.worker,
  create: actions.create.creator.worker,
  createBatch: actions.createBatch.creator.worker,
  update: actions.update.creator.worker,
  remove: actions.remove.creator.worker,
  clear: actions.clear.creator.worker,
};

export { default } from './reducer';
