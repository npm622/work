import { makesSliceReducer } from '@makes-apps/lib';

import State from '../../types/blogs';

import * as actions from './actions';

export default makesSliceReducer(State.NAMESPACE, new State(), actions);
