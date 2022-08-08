import { makesSliceReducer } from '@makes-apps/lib';

import { BlogsState } from '../../types/blogs';

import * as actions from './actions';

export default makesSliceReducer(BlogsState.NAMESPACE, new BlogsState(), actions);
