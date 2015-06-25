var React = require('react')
var Router = require('react-router');
var Handler = Router.Handler;
var routes = require('./routes')

Router.run(routes, Router.HistoryLocation, function (Handler) {
  console.log('rendering on client')
  React.render(
    <Handler/>,
    document.getElementById('app')
  )
});