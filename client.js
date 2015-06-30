var React = require('react'),
    alt = require('./app/lib/alt'),
    Router = require('react-router'),
    Iso = require('iso'),
    Handler = Router.Handler,
    Promise = require('Promise'),
    objectAssign = require('object-assign'),
    routes = require('./routes'),
    fetcher = require('./app/lib/fetcher'),
    DataFetchActions = require('./app/actions/DataFetchActions');

function isEmpty(object) {
  for(var i in object) {
    return false;
  }
  return true;
}

Iso.bootstrap(function (state, _, container) {
  alt.bootstrap(state);

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
