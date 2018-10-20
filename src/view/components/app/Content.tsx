import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { urls } from '../../../util';
import { About, Contact, Home, Login, NotFound, Welcome } from '../../pages';

const Content = () => (
  <div className="content">
    <Switch>
      <Route exact path={urls.welcome()} component={Welcome} />
      <Route path={urls.login()} component={Login} />
      <Route path={urls.about()} component={About} />
      <Route path={urls.contact()} component={Contact} />
      <Route path={urls.home()} component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
