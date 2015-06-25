var React = require('react')
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Handler = Router.Handler;
var PoliticsApp = require('./components/PoliticsApp.react');
var CandidateList = require('./components/CandidateList.react');
var CandidateProfile = require('./components/CandidateProfile.react');

// declare our routes and their hierarchy
var routes = (
  <Route path="/" handler={PoliticsApp}>
  	<DefaultRoute handler={CandidateList}/>
    <Route path="candidate/:id" handler={CandidateProfile}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(
    <Handler/>,
    document.getElementById('app')
  )
});