//---import the dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//---import the components
import Index from '../pages/index';
import History from '../pages/history';
import NewOrder from '../pages/newOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/app" exact component={Index} />
      <Route path="/app/history" exact component={History} />
      <Route path="/app/neworder" exact component={NewOrder} />
    </Switch>
  );
}
