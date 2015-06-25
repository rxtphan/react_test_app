var React = require('react')
var {Route, DefaultRoute} = require('react-router')
var PoliticsApp = require('./components/PoliticsApp.react');
var CandidateList = require('./components/CandidateList.react');
var CandidateProfile = require('./components/CandidateProfile.react');

// declare our routes and their hierarchy
module.exports = [
  <Route path="/" handler={PoliticsApp}>
  	<DefaultRoute handler={CandidateList}/>
    <Route path="candidate/:id" handler={CandidateProfile}/>
  </Route>
];
