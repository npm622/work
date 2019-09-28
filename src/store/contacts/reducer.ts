import { makesSliceReducer } from '@makes-apps/lib';

import State from '../../types/contacts';

import * as actions from './actions';

export default makesSliceReducer(State.NAMESPACE, new State(), actions);
