var React = require('react');
var CandidateActions = require('../actions/CandidateActions');
var CandidateListItem = require('./CandidateListItem.react');

var CandidateList = React.createClass({
  
  render: function() {
    // This section should be hidden by default
    if (Object.keys(this.props.candidates).length < 1) {
      return null;
    }

    var candidates = this.props.candidates;
    var candidateListItems = [];

    for (var key in candidates) {
      candidateListItems.push(<CandidateListItem key={key} candidate={candidates[key]} />);
    }

    return (
      <ul id="candidate-list">{candidateListItems}</ul>
    );
  }
});

module.exports = CandidateList;