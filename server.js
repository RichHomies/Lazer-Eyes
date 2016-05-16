var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var RoutingContext = Router.RoutingContext;
var routes = require('./app/routes');
var express = require('express');
var app = express();
var morgan = require('morgan');
var parser = require('body-parser');
var cors = require('cors');
var path = require('path');
var initServer = function() {
  // attaches all the routes to the server
  var port = process.env.PORT || 8080;
  var server = app.listen(port);
  console.log("Express server listening on %d in %s mode", port, app.settings.env)
}

app.use(morgan('tiny'));
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//React Router
app.use(function(req, res, next) {
  Router.match({ routes: routes, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(<RoutingContext {...renderProps} />);
      var page = swig.renderFile('viewsFromThe6/index.html', { html: html });
      res.status(200).send(page);
    } else {
      next();
    }
  });
});

initServer();
exports.app = app;


