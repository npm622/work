import appActions from '../../actions';

import { Blog, BlogsState } from '../../types/blogs';

const factory = appActions.app().forNamespace<BlogsState>(BlogsState.NAMESPACE);

export const { list, get, create, createBatch, update, clear, remove } = appActions.crud<BlogsState, Blog>(factory)(
  dbs => dbs.app().blogs(),
  'blogs'
);
