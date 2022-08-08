import { MongoCrudActions } from '@makes-apps/lib';

import { Blog } from '../../types/blogs';

import * as actions from './actions';

export type BlogsActions = MongoCrudActions<Blog>;

export const blogsActions = {
  list: actions.list.creator.worker,
  get: actions.get.creator.worker,
  create: actions.create.creator.worker,
  createBatch: actions.createBatch.creator.worker,
  update: actions.update.creator.worker,
  remove: actions.remove.creator.worker,
  clear: actions.clear.creator.worker,
};

export { default as blogsReducer } from './reducer';
