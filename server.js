require('node-jsx').install({harmony: true});

var express = require('express'),
    mustacheExpress = require('mustache-express'),
    React = require('react'),
    Router = require('react-router'),
    routes = require('./js/routes');

var app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');

app.use(express.static('public'));

app.use(function(req, res, next) {
  var router = Router.create({location: req.url, routes: routes})
  router.run(function(Handler, state) {
    console.log('rendering to string on server')
    var html = React.renderToString(<Handler/>)
    console.log('rendered html', html)
    return res.render(__dirname + '/index', {html: html})
  })
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});