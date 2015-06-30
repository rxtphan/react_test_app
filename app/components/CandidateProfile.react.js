var React = require('react'),
    CandidateActions = require('../actions/CandidateActions'),
    CandidateStore = require('../stores/CandidateStore'),
    Promise = require('promise'),
    request = require('superagent'),
    config = require('../lib/config');

var CandidateProfile = React.createClass({
  statics: {
    fetchData: function (params) {
      return new Promise(function (resolve, reject) {
        request
          .get(config.baseUrl + ':' + config.serverPort + '/api/candidate/' + params.id)
          .end(function (err, res) {
            var candidate = res.body;
            resolve({'CandidateStore': candidate});
        });
      });
    }
  },

  getInitialState: function () {
    var id = this.props.params.id;
    var allCandidates = CandidateStore.getState().candidates;
    return { candidate: allCandidates[id] };
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
