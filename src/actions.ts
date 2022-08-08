import { makesMongoCrudActions, ActionFactory, AppActions } from '@makes-apps/lib';
import { RemoteMongoCollection } from 'mongodb-stitch-browser-sdk';

import dbs from './dbs';
import { RootContext, RootState } from './root';

export default {
  app: () => AppActions<RootState, RootContext>(),
  crud: <STATE, DOC>(factory: ActionFactory<RootContext, STATE>) => (
    coll: (dbMap: ReturnType<typeof dbs>) => RemoteMongoCollection<DOC>,
    dbKey: string,
  ) => makesMongoCrudActions<RootContext, STATE, DOC>(factory, c => coll(dbs(c)), dbKey),
};
