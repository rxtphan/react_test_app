var React = require('react'),
    {Route, DefaultRoute} = require('react-router'),
    PoliticsApp = require('./app/components/PoliticsApp.react'),
    CandidateList = require('./app/components/CandidateList.react'),
    CandidateProfile = require('./app/components/CandidateProfile.react');

// declare our routes and their hierarchy
module.exports = [
  <Route path="/" handler={PoliticsApp}>
  	<DefaultRoute name ="candidatelist" handler={CandidateList}/>
    <Route name ="candidate" path="candidate/:id" handler={CandidateProfile}/>
  </Route>
];
