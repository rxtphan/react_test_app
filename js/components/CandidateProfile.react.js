var React = require('react');
var CandidateActions = require('../actions/CandidateActions');
var CandidateStore = require('../stores/CandidateStore');

var CandidateProfile = React.createClass({

  getInitialState: function () {
    var id = this.props.params.id;
    var allCandidates = CandidateStore.getState().candidates;

    for (var i = 0; i < allCandidates.length; i++) {
      if (allCandidates[i].id == id) {
       return { candidate: allCandidates[i] };
        continue;
      }
    }
  },

  componentDidMount: function () {
    
  },

  render: function() {
    var candidate = (this.state) ? this.state.candidate : null;
    
    if (!candidate) return (<div>ERROR: No candidate</div>);

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
