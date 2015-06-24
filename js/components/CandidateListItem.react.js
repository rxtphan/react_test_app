var React = require('react');
var CandidateActions = require('../actions/CandidateActions');

var CandidateListItem = React.createClass({
  render: function() {
    var candidate = this.props.candidate;
    return (
      <li
        className="candidate-list-item"
        key={candidate.id}>
        <img
          src={candidate.pic}
        />
        <div>
          {candidate.name}
        </div>
      </li>
    );
  }
});

module.exports = CandidateListItem;
