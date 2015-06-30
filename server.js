var config = require('./app/lib/config'),
    express = require('express'),
    mustacheExpress = require('mustache-express'),
    React = require('react'),
    alt = require('./app/lib/alt'),
    Iso = require('iso'),
    Router = require('react-router'),
    routes = require('./routes'),
    fetcher = require('./app/lib/fetcher'),
    api = require('./app/lib/api');

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
       fetcher.fetch(state, function (data) {
        alt.bootstrap(
          JSON.stringify(data)
        );

        //console.log('rendering to string on server')
        var html = React.renderToString(<Handler/>);
        iso.add(html, alt.flush());

        return res.render(__dirname + '/main', {html: iso.render()});
      });
	  });	
});

var server = app.listen(config.serverPort, function () {
  console.log('Example app listening at %s:%s', config.baseUrl, config.serverPort);
});