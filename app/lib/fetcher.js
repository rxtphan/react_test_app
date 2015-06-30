var routes = require('../../routes'),
    Promise = require('promise'),
    objectAssign = require('object-assign');

var fetcher = {
	fetch: function (state, cb) {
    var data = {};

    var routesWithFetchData = state.routes.filter(function (route) {
      return route.handler.fetchData
    });

    var allFetchDataPromises = routesWithFetchData.map(function (route) {
      return route.handler.fetchData(state.params).then(function (routeData) {
        data[route.name] = routeData;
      });
    });

    Promise.all(allFetchDataPromises).then(function() {
      var mergedData = {};
      for (var routeData in data) {
        objectAssign(mergedData, data[routeData]);
      }

      cb(mergedData);
    });
  }
}

module.exports = fetcher;