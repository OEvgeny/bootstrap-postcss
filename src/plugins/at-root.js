module.exports = function(opts) {
  opts = opts || {}
  return function(root, opts) {
    root.walkAtRules('at-root', function(rule) {
      var p = rule
      //Find first node from the root to move nodes before it
      while (p && p.parent != root) p = p.parent
      root.insertBefore(p, rule.nodes)
      rule.remove()
    })
  }
}
