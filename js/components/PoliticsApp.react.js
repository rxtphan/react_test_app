var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var PoliticsApp = React.createClass({
  render: function() {
  	return (
      <div>
        <h1>Politics App</h1>
        <RouteHandler/>
      </div>
  	);
  }
});

module.exports = PoliticsApp;
