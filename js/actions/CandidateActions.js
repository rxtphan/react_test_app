var alt = require('../alt')

class CandidateActions {
  constructor() {
    this.generateActions(
      'endorse'
    )
  }
}

module.exports = alt.createActions(CandidateActions)