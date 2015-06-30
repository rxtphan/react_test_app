var React = require('react');
var CandidateStore = require('../stores/CandidateStore');
var CandidateActions = require('../actions/CandidateActions');
var CandidateListItem = require('./CandidateListItem.react');
var FluxyMixin = require('../../node_modules/alt/mixins/FluxyMixin.js');
var {Link} = require('react-router');
var request = require('superagent');
var config = require('../lib/config');

function getCandidateState() {
  return CandidateStore.getState()
}

var CandidateList = React.createClass({
  mixins: [FluxyMixin],

  statics: {
    fetchData: function () {
      return new Promise(function (resolve, reject) {
        request
          .get(config.baseUrl + ':' + config.serverPort + '/api/candidate/all')
          .end(function (err, res) {
            var candidates = res.body
            resolve({'CandidateStore': candidates});
        });
      });
    },
    storeListeners: {
      _onChange: CandidateStore
    }
  },

  getInitialState: function() {
    return getCandidateState();
  },

  /**
   * @return {object}
   */
  render: function() {
    // This section should be hidden by default
    if (Object.keys(this.state.candidates).length < 1) {
      return null;
    }

    var candidates = this.state.candidates;
    var candidateListItems = [];

    for (var key in candidates) {
      candidateListItems.push(<CandidateListItem key={key} candidate={candidates[key]} />);
    }

    return (
      <div>
        <ul id="candidate-list">{candidateListItems}</ul>
        <Link
          to='candidate'
          params={{id: 3}}>
          <div>
            {'Fake link'}
          </div>
        </Link>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getCandidateState());
  }
});

module.exports = CandidateList;