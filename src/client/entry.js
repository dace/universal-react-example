import React from "react";
import { render } from 'react-dom';
import { Router } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from "../shared/routes/routes";

const history = createBrowserHistory();

render((
  <Router
    history={ history }
    routes={ routes } />
), document.getElementById('app'));

// Router.run(routes, Router.HistoryLocation, (Handler, state) => {
//   React.render(<Handler />, document.getElementById('app'));
// });
