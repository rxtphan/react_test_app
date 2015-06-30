var alt = require('../lib/alt')

class DataFetchActions {
  constructor() {
    this.generateActions(
      'received'
    )
  }
}

module.exports = alt.createActions(DataFetchActions)