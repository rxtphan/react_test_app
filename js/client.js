var React = require('react');
var Router = require('react-router');
var Iso = require('iso');
var Handler = Router.Handler;
var Promise = require('Promise');
var objectAssign = require('object-assign');
var routes = require('./routes');
var DataFetchActions = require('./actions/DataFetchActions');

window.request = require('superagent');

window.alt = require('./alt');

var isFirstLoad = true;

function isEmpty(object) {
  for(var i in object) {
    return false;
  }
  return true;
}

Iso.bootstrap(function (state, _, container) {
  window.alt.bootstrap(state);

  Router.run(routes, Router.HistoryLocation, function (Handler, state) {

    var allFetchDataPromises = [];
    var data = {};
    if (!isFirstLoad) {
      var routesWithFetchData = state.routes.filter(function (route) {
        return route.handler.fetchData
      });

      allFetchDataPromises = routesWithFetchData.map(function (route) {
        return route.handler.fetchData(state.params).then(function (routeData) {
          data[route.name] = routeData;
        });
      });
    }
    isFirstLoad = false;

    Promise.all(allFetchDataPromises).then(function() {
      var mergedData = {};
      for (var routeData in data) {
        objectAssign(mergedData, data[routeData]);
      }

      console.log('mergedData', mergedData);

      //fire action with new data
      if (!isEmpty(mergedData)) {
        DataFetchActions.received(mergedData);
      }

      React.render(
        <Handler/>,
        container
      );

    });
	});
});
