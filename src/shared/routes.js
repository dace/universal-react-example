import React from "react";
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Project from './components/Project';

export default (
  <Route
    path="/"
    component={ App }>
    {/**<IndexRoute component={ Home } />**/}
      <IndexRoute component={ Project }/>
  </Route>
);
