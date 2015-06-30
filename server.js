var express = require('express'),
    mustacheExpress = require('mustache-express'),
    React = require('react'),
    alt = require('./js/alt'),
    Iso = require('iso'),
    Router = require('react-router'),
    Promise = require('promise'),
    objectAssign = require('object-assign'),
    routes = require('./js/routes'),
    api = require('./api');

var app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/api/candidate/:id', function (req, res) {
  api.candidate(req.params.id, function (data) {
    res.send(data);
  });
});

app.use(function(req, res, next) {
    var iso = new Iso();

  	var router = Router.create({location: req.url, routes: routes});
	  router.run(function(Handler, state) {
      
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
        console.log('server done fetching', data);
        var mergedData = {};
        for (var routeData in data) {
          objectAssign(mergedData, data[routeData]);
        }

        alt.bootstrap(
          JSON.stringify(mergedData)
        );

        //console.log('rendering to string on server')
        var html = React.renderToString(<Handler/>);
        iso.add(html, alt.flush());

        return res.render(__dirname + '/index', {html: iso.render()});
      });
	  });	
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});