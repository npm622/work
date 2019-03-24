import React from 'react';
import { Router } from 'makes-apps';
import { App } from './view';

export default ({ history }: any) => <Router app={App} history={history} />;
