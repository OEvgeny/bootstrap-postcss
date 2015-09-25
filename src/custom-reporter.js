var base = require('mocha').reporters.base

// custom-reporter for mocha, splits all error messages
// only diffs are shown
module.exports = function(runner) {
  var self = this;
  var indents = 0;
  var n = 0;
  base.call(this, runner);

  runner.on('start', function() {
    console.log();
  });

  runner.on('suite', function(suite) {
    ++indents;
    console.log(base.color('suite', '%s%s'), suite.title);
  });

  runner.on('suite end', function() {
    --indents;
    if (indents === 1) {
      console.log();
    }
  });

  runner.on('pending', function(test) {
    var fmt = base.color('pending', '  - %s');
    console.log(fmt, test.title);
  });

  runner.on('pass', function(test) {
    var fmt;
    if (test.speed === 'fast') {
      fmt = base.color('checkmark', '  ' + base.symbols.ok)
        + base.color('pass', ' %s');
      base.cursor.CR();
      console.log(fmt, test.title);
    } else {
      fmt = base.color('checkmark', '  ' + base.symbols.ok)
        + base.color('pass', ' %s')
        + base.color(test.speed, ' (%dms)');
      base.cursor.CR();
      console.log(fmt, test.title, test.duration);
    }
  });

  runner.on('fail', function(test) {
    base.cursor.CR();

    test.err.stack = ''
    test.err.message = 'Not matches:'

    console.log(base.color('fail', '  %d) %s'), ++n, test.title);
  });

  runner.on('end', base.prototype.epilogue.bind(this));
}
