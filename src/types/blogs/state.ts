import { BaseMongoCrudState } from '@makes-apps/lib';

import { Blog } from './blog';

class State extends BaseMongoCrudState<Blog> {
  static NAMESPACE = 'blog';
}

export default State;
