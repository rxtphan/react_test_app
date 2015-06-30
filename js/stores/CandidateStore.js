var alt = require('../alt')
var merge = require('object-assign')

var CandidateActions = require('../actions/CandidateActions')

var candidateStore = alt.createStore(class TodoStore {
  constructor() {
    this.bindActions(CandidateActions);
    this.candidates = {};
  }
}, 'CandidateStore')

module.exports = candidateStore