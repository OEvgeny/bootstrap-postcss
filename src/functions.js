var one = require("onecolor")
var calc = require('reduce-css-calc')

/*
 * Get number part of given value
 */
function convertToNum(value) {
  if ((typeof value == "number") && (value))
    return {value: value, type: 'number'}
  switch (value[value.length - 1]) {
    case '%':
      value = {value: parseFloat(value) / 100.0, type: '%'}
      break;
    default:
      value = {value: parseFloat(value), type: null}
  }
  return value
}

/*
 * parse map into hash and indexes array
 */
function parseMap(map) {
  var hash = {}
  var indexes = []
  map.replace(/(\(|\)|\r\n|\n|\r)/gm, '').split(',').forEach(function(el, index){
    var param = el.split(':')
    var key = param[0] && param[0].trim()
    hash[key] = param[1] && param[1].trim()
    indexes[index] = key
  })
  return {hash: hash, index:indexes}
}

function mapToHash(map) {
  return parseMap(map).hash
}

function getMapKeys() {
  parseMap(map).index
}

/*
 * Implementation of bootstrap functions
 */

function breakpointNext($name, $breakpoints, $breakpointNames) {
  var m = parseMap($breakpoints)
  var n = m.index.indexOf($name)
  var next = m.index[n + 1]
  return next || false
}

function breakpointMax($name, $breakpoints) {
  var next = breakpointNext($name, $breakpoints)
  return next ? calc('calc(' + breakpointMin(next, $breakpoints) + ' - 0.1)') : false
}

function breakpointMin($name, $breakpoints) {
  var min = mapToHash($breakpoints)
  return min[$name] ? min[$name] : false
}

/*
 * Call color function and return color
 */
function colorFunc(func, color, amount) {
    var val = convertToNum(amount).value
    var result = one(color)
    if (val) {
      result = result[func] ? result[func](val, true) : result
    }
    return result.alpha() >= 1 ? result.hex().toLowerCase() : result.cssa()
}

/*
 * Short way to evaluate expression. Need to be reworked
 */
function safeEval(exp) {
  var result = exp
  try {
    result = eval('('+exp+')')
  }
  catch (err) {
    console.log("eval: can't parse", exp, err)
    return exp
  }
  return result
}

module.exports = {
  // Inline if Implementation. Need to be reworked.
  'if': function(exp, trueVal, falseVal) {
    var res = safeEval(exp)
    return res && res != exp ? trueVal : falseVal
  },
  // SASS functions
  'percentage': function(exp) {
    return (Number(safeEval(exp)) * 100).toFixed(5) + '%'
  },
  lighten: function(color, amount) {
    return colorFunc('lightness', color, amount)
  },
  darken: function(color, amount) {
    return colorFunc('lightness', color, '-' + amount)
  },
  'fade-in': function(color, amount) {
    var val = convertToNum(amount).value
    var result = one(color)
    result = result.alpha(result.alpha() + val)
    return result.alpha() >= 1 ? result.hex().toLowerCase() : result.cssa()
  },
  'map-keys': function(map) {
    var ret = Object.keys(mapToHash(map)).join(', ')
    return ret
  },
  // Hack to replace rgba with alpha 1 with hex color
  rgba: function() {
    var str = 'rgba(' + Array.prototype.join.call(arguments, [',']) + ')'
    var color = one(str)
    return color.alpha() >= 1 ? color.hex().toLowerCase() : str
  },
  "ie-hex-str": function(color) {
    var c = one(color)
    function hexColor() {
      var res = ''
      for (var i = 0; i < arguments.length; i++ ) {
        var val = arguments[i].toString(16)
        res += val.length == 2 ? val : '0' + val
      }
      return "#" + res
    }
    return hexColor(((c.alpha() * 256) | 0), c.red(), c.green(), c.blue())
  },
  // Bootstrap functions
  "breakpoint-next": breakpointNext,
  "breakpoint-max": breakpointMax,
  "breakpoint-min": breakpointMin
}
