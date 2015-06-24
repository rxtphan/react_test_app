var CandidateList = require('./CandidateList.react');
var CandidateProfile = require('./CandidateProfile.react');
var React = require('react');
var CandidateStore = require('../stores/CandidateStore');
var FluxyMixin = require('../../node_modules/alt/mixins/FluxyMixin.js');

function getCandidateState() {
  return CandidateStore.getState()
}

var PoliticsApp = React.createClass({
  mixins: [FluxyMixin],

  statics: {
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
  	return (
      <div>
        <CandidateList
          candidates={this.state.candidates}
        />
         <CandidateProfile
          candidate={this.state.candidates[0]}
        />
      </div>
  	);
  },

  _onChange: function() {
    this.setState(getCandidateState());
  }

});

module.exports = PoliticsApp;
