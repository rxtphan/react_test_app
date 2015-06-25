var React = require('react');
var CandidateActions = require('../actions/CandidateActions');
var {Link} = require('react-router')

var CandidateListItem = React.createClass({
  render: function() {
    var candidate = this.props.candidate;
    return (
      <li
        className="candidate-list-item"
        key={candidate.id}>
        <Link
          to='/candidate/:id'
          params={{id: candidate.id}}>
          <img
            src={candidate.pic}
          />
          <div>
            {candidate.name}
          </div>
        </Link>
      </li>
    );
  }
});

module.exports = CandidateListItem;
