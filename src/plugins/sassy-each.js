var postcss = require('postcss');
var vars    = require('postcss-simple-vars');

var SEPARATOR = /\s+in\s+/;

function checkParams(params) {
  if (!SEPARATOR.test(params)) return 'Missed "in" keyword in @each';

  var args = params.split(SEPARATOR).map(function(str) { return str.trim() });
  var name = args[0]
  var values = args[1]

  if (!name.match(/\$[_a-zA-Z]?\w+/)) return 'Missed variable name in @each';
  if (!values.match(/(\w+\,?\s?)+/)) return 'Missed values list in @each';

  return null;
}

function tokenize(str) {
  return postcss.list.comma(str).map(function(str) {return str.replace(/^\$/, '')});
}

function paramsList(params) {
  var args = params.replace(/(\(|\)|\r\n|\n|\r)/gm, '').split(SEPARATOR).map(tokenize);
  var vars = args[0]
  var vals = args[1]
  var matched = false;

  vals = vals.map(function(value) {
    var match = value.indexOf(':') != 0
    if (match) {
      matched = true;
      return value.split(':').map(function(el) {return el.trim()})
    }
    return value;
  });

  var values = []
  vals[0].forEach(function() {values.push([])})

  vals.forEach(function(el, i) {
    vals[0].forEach(function(_, j) { values[j][i] = el[j] })
  })

  var ret = {
    names:     values.map(function(_, i) { return vars[i] }),
    indexName: vars[values.length],
    values:    values
  };

  return ret
}

function processRules(rule, params) {
  var parent = rule.parent
  var clones = []
  params.values[0].forEach(function(_, i) {
    rule.nodes.forEach(function(node) {
        var clone = node.clone();
        var proxy = postcss.rule({ nodes: [clone] });
        var vals = {};

        params.names.forEach(function(name, j) {
          vals[name] = params.values[j][i];
        });

        if (params.indexName) vals[params.indexName] = i;

        vars({ only: vals })(proxy);
        clones.push(clone)
      });
  });
  parent.insertBefore(rule, clones);
}

function processEach(rule) {
  processLoop(rule);
  var params  = ' ' + rule.params + ' ';
  var error   = checkParams(params);
  if (error) throw rule.error(error);

  var parsedParams = paramsList(params);
  processRules(rule, parsedParams);
  rule.removeSelf();
}

function processLoop(css) {
  css.eachAtRule('each', processEach);
};

module.exports = postcss.plugin('postcss-each', function(opts) {
  opts = opts || {};
  return processLoop;
});
