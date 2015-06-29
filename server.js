var express = require('express'),
    mustacheExpress = require('mustache-express'),
    React = require('react'),
    alt = require('./js/alt'),
    Iso = require('iso'),
    Router = require('react-router'),
    routes = require('./js/routes'),
    api = require('./api');

var app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.use(express.static('public'));

app.use(function(req, res, next) {
  api.getAllCandidates(function (candidates) {
    alt.bootstrap(
      JSON.stringify(
        {
          CandidateStore: { candidates: candidates }
        }
      )
    );

    var iso = new Iso();

  	var router = Router.create({location: req.url, routes: routes})
	  router.run(function(Handler, state) {
	    //console.log('rendering to string on server')
	    var html = React.renderToString(<Handler/>)
      iso.add(html, alt.flush())
	    //console.log('rendered html', html)
	    return res.render(__dirname + '/index', {html: iso.render()})
	  });	
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});