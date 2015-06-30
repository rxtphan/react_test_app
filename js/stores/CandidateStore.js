var alt = require('../alt')
var objectAssign = require('object-assign')

var DataFetchActions = require('../actions/DataFetchActions')
var CandidateActions = require('../actions/CandidateActions')

var candidateStore = alt.createStore(class TodoStore {
  constructor() {
    this.bindAction(DataFetchActions.received, this.onDataReceived);

    this.bindActions(CandidateActions);
    this.candidates = {};
  }

  onDataReceived(newData) {
    this.candidates = objectAssign({}, this.candidates, newData['CandidateStore'].candidates);
  }
}, 'CandidateStore')

module.exports = candidateStore