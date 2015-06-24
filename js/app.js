var PoliticsApp = require('./components/PoliticsApp.react')
var React = require('react')
React.render(
  React.createElement(PoliticsApp, {}),
  document.getElementById('app')
)