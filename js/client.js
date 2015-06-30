var React = require('react'),
    Router = require('react-router'),
    Iso = require('iso'),
    Handler = Router.Handler,
    Promise = require('Promise'),
    objectAssign = require('object-assign'),
    routes = require('./routes'),
    fetcher = require('../fetcher'),
    DataFetchActions = require('./actions/DataFetchActions');

window.alt = require('./alt');

function isEmpty(object) {
  for(var i in object) {
    return false;
  }
  return true;
}

Iso.bootstrap(function (state, _, container) {
  window.alt.bootstrap(state);

  Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    fetcher.fetch(state, function (data) {
      //fire action with new data
      if (!isEmpty(data)) {
        DataFetchActions.received(data);
      }

      React.render(
        <Handler/>,
        container
      );

    });
	});
});
