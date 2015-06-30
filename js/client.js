var React = require('react');
var Router = require('react-router');
var Iso = require('iso');
var Handler = Router.Handler;
var routes = require('./routes');

window.request = require('superagent');

window.alt = require('./alt');

Iso.bootstrap(function (state, _, container) {
  window.alt.bootstrap(state);

  Router.run(routes, Router.HistoryLocation, function (Handler) {
	  console.log('rendering on client')
	  React.render(
	    <Handler/>,
	    container
	  );
	});
});
