var React = require('react');
var CandidateActions = require('../actions/CandidateActions');

var CandidateProfile = React.createClass({
  render: function() {
    var candidate = this.props.candidate;
    return (
      <li
        key={candidate.id}>
        <img
          src={candidate.pic}
        />
        <div>
          {candidate.name}
        </div>
        <div>
          {candidate.websiteUrl}
        </div>
        <div>
          {candidate.twitterUrl}
        </div>
        <div>
          {candidate.facebookUrl}
        </div>
      </li>
    );
  }
});

module.exports = CandidateProfile;
