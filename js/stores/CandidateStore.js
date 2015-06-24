var alt = require('../alt')
var merge = require('object-assign')

var CandidateActions = require('../actions/CandidateActions')

var candidateStore = alt.createStore(class TodoStore {
  constructor() {
    this.bindActions(CandidateActions)

    this.candidates = [
      {
        id: 1,
        name: 'Jeb Bush',
        pic: 'images/jebbush.jpg',
        facebookUrl: 'https://www.facebook.com/jebbush',
        twitterUrl: 'https://twitter.com/jebbush',
        websiteUrl: 'https://jeb2016.com/'
      },
      {
        id: 2,
        name: 'Ted Cruz',
        pic: 'images/tedcruz.jpg'
      },
      {
        id: 3,
        name: 'Donald Trump',
        pic: 'images/donaldtrump.jpg'
      }
    ]
  }
})

module.exports = candidateStore
