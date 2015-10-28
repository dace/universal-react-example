import express from "express";
import React from "react";
import {match, RoutingContext} from "react-router";
import {renderToString} from 'react-dom/server';
const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

import routes from "../shared/routes";

app.get('/*', (req, res) => {
  match({
    routes,
    location: req.url,
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const markup = renderToString(<RoutingContext {...renderProps} />);
      console.log(markup);
      res.render('index', { content: markup });
      res.status(200).send();
    } else {
      res.status(404).send('Error 404: Page Not found');
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
