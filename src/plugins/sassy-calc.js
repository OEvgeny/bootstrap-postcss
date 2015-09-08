var calc = require('reduce-css-calc')
var mathRe = /[\ \-]*\([\.\(\)\*0-9\-\+a-z\/\ \t]*\)/i

module.exports = function(opts) {
  opts = opts || {}
  return function(root, opts) {
    root.walkDecls(function(decl) {
      if (mathRe.test(decl.value)) {
        var val = decl.value
        var depth = 0
        if (val.split(')').length != val.split('(').length)
          throw decl.error("Count of '(' and ')' is not the same!")
        var brPos = val.indexOf('(')
        if (brPos == -1)
          return
        for (var i = brPos; i < val.length; i++) {
          if (val[i] == '(') {
            if (depth == 0) {
              val = val.substr(0, i) + 'calc' + val.substr(i, val.length)
              i += 4
            }
            depth++
          }
          if (val[i] == ')')
            depth--
        }
        val = calc(val)
        decl.value = val.indexOf("NaN") == -1 ? val : decl.value
      }
    })
  }
}
