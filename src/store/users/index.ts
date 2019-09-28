import { MongoCrudActions } from '@makes-apps/lib';

import { User } from '../../types/users';

import * as actions from './actions';

export type UsersActions = MongoCrudActions<User>;

export const usersActions = {
  list: actions.list.creator.worker,
  get: actions.get.creator.worker,
  create: actions.create.creator.worker,
  createBatch: actions.createBatch.creator.worker,
  update: actions.update.creator.worker,
  remove: actions.remove.creator.worker,
  clear: actions.clear.creator.worker,
};

export { default } from './reducer';
