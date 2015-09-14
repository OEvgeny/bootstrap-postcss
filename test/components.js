var chai = require('chai')
var components = require('../components.js')
var parse = require('postcss').parse
var jsonify = require('../src/jsonify')
var fs = require('fs')
var path = require('path')

function read(file) {
  return fs.readFileSync(path.join(__dirname, file));
}

describe('Bootstrap v4 PostCSS', function() {
  // add test for each component
  // TODO: split test by different types
  components.forEach(function(comp) {
    it('component: ' + comp, function() {
      var cssFile = '../dist/components/' + comp + '.css'
      var jsonFile = './components/' + comp + '.json'
      var json = read(jsonFile).toString().trim()
      var css = read(cssFile).toString().trim()

      var parsed = jsonify(parse(css, { from: cssFile }))
      chai.expect(parsed).to.eql(json)
    })
  })
})
