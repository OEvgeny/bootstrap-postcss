var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

/*
 * It's not working properly for now, but heads up! Let's include it
 * to show people that it exists and I know about that.
 */
var scss = require('postcss-scss')

// minifyCss config
var minConf = {
  compatibility: 'ie9',
  keepSpecialComments: '*',
  //sourceMap: true,
  noAdvanced: true
}

function bootstrapPath(root, options) {
  // Remove functions (they are not supported for now). Use ./src/functions.js as replacement
  root.walkAtRules('function', function(rule) {
    console.log('Removed', rule.name + ':\n  ', rule.params.trim())
    rule.remove()
  })

  // Some vars need to be unquoted
  var varNames = ["$nbsp", "$breadcrumb-divider"]
  function unquote(str) { // Unsafe unquote
    return str.replace(/(\'|\")/g, '')
  }
  root.walkDecls(function(decl) {
    if (varNames.indexOf(decl.prop) != -1) {
      console.log('Found:', decl.prop, "with value:", decl.value)
      decl.value = unquote(decl.value)
      console.log('   Replaced with:', decl.value)
    }
  })

  // Unquote function arguments for functions:
  var funcName = ['responsive-invisibility', 'bg-variant', 'text-emphasis-variant']
  var reFunc = new RegExp('(?:' + funcName.join('|') + ')')
  root.walkAtRules(function(rule) {
    if (reFunc.test(rule.params)) {
      console.log('Found', rule.name, "with params:", rule.params)
      rule.params = unquote(rule.params)
      console.log('   Replaced with:', rule.params)
    }
  })
  // Replace not in if statements
  root.walkAtRules('if', function(rule){
    var i = rule.params.indexOf('not ')
    if (i != -1) {
      console.log('Found', rule.name, "with params:", rule.params)
      rule.params = rule.params.replace('not ', 'false != ')
      console.log('   Replaced with:', rule.params)
    }
  })
  // Replace through in for loops
  root.walkAtRules('for', function(rule){
    var i = rule.params.indexOf('through')
    if (i != -1) {
      console.log('Found', rule.name, "with params:", rule.params)
      rule.params = rule.params.replace('through ', 'to ')
      console.log('   Replaced with:', rule.params)
    }
  })
}

/*
 * Convert bootstrap sass styles to fit postcss requirements
 */
gulp.task('postcss', function() {
  return gulp.src('bootstrap/scss/**/*.scss', {base: 'bootstrap/scss/'})
    // Fix variable syntax #{$var} => $(var)
    .pipe($.replace(/\#\{\$?([0-9a-z\-]+)\}/ig, "$$($1)"))
    // Fix called functions syntax #{function()} => function()
    .pipe($.replace(/\#\{([\(\)\$0-9a-z\-\"\"\'\']+)\}/ig, "$1"))
    // Add ';' at end for @content and @include: @content => @content;
    .pipe($.replace(/(@content|@include)(.*)/g, function(str, word) {
      var pos = str.indexOf(word) + word.length
      var colonPos = str.length //Pos colon at the end by default
      for (var i = str.length - 1; i >= pos; i--) {
        if (str[i] == ';')
          return str
        if (str[i] == '}')
          colonPos = i
        if (str[i] == '{' && str[colonPos] != '}') {
          return str
        }
      }
      var str = colonPos == str.length ? str + ';' : str.substr(0, colonPos) + ';' + str.substr(colonPos, str.length)
      return str
    }))
    // Replace 0\0 => 0 \0 - sass doing it...
    .pipe($.replace('0\\0', '0 \\0'))
    // Remove !default from variable definitions since it's not supported
    .pipe($.replace(' !default', ''))
    // Strip comments (or switch type - commented)
    .pipe($.replace(/(^|\;|\s+)\/\/(.*)/g, ''))//'$1/*$2 */'))
    // Path files to build correctly with postcss. See bootstrapPath function.
    .pipe($.postcss([
      bootstrapPath,
      // All functions must be resolved after loops
      // This ones used in loop's value declaration. Hack resolves them before loops.
      require('postcss-functions')({
        functions: {
          // map-keys($var) => $var
          'map-keys': funcs['map-keys'],
          // rgba(x,x,x, 1) => #xxxxxx
          'rgba': funcs['rgba']
        }
      }),
    ], {syntax: scss}))
    // Rename files to get @import to work: _file.scss => file.css
    //.pipe($.rename(function(path) {
      //path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
      //path.extname = '.css'
    //}))
    .pipe(gulp.dest('postcss/'))
})

// functions set to replace some sass and bootstrap ones
var funcs = require('./src/functions')

// Part of postcss config to build SASS like syntax
var config = [
    // Replace all @import with file contents
    require('postcss-partial-import')({extension: 'scss'}),
    // Resolve @mixin
    require('postcss-sassy-mixins')({
      //mixins: // Mixins written in JavaScript goes here
    }),
    // Some variables are used in loops. Simply skip them
    require('postcss-simple-vars')({
      unknown: function(node, name, result) {
        console.warn('Possible missed variable:', name)
        return false
      }
    }),
    // Resolve @each loops
    require('./src/plugins/sassy-each')(),
    // Resolve @for loops
    require('postcss-for')(),
    // Resolve other functions
    require('postcss-functions')({
      functions: funcs
    }),
    // Resolve @if @else
    require('postcss-conditionals')(),
    // Resolve calculations in ()
    require('./src/plugins/sassy-calc')(),
    // Resolve @extend
    require('postcss-sass-extend')(),
    // Attach some rules to root css node, in case when it is included to selector
    // e.g.: .bs {@include "bootstrap.css";}
    require('./src/plugins/at-root.js')(),
    // Resolve nested rules
    require('postcss-nested')(),
]

// Bootstrap Config related plugins
var bsConfig = [
  require('autoprefixer')([
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
  ])
]

/*
 * Build bootstrap with postcss from converted styles
 */
gulp.task('bootstrap', function() {
  //Add Bootstrap related postcss plugins
  config.push.apply(config, bsConfig)
  return gulp.src('src/bootstrap.css')
    .pipe($.postcss(config, {syntax: scss}))
    .pipe(gulp.dest('dist'))
    .pipe($.minifyCss(minConf))
    .pipe($.rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
})

var cssfmt = require('cssfmt')({})

// Configuration for components task
var components = require('./components.js')

/*
 * Build components separately for debug purposes
 */
gulp.task('components', function() {
  config.push.apply(config, bsConfig)
  return gulp.src('postcss/_{'+components.join(',')+'}.scss')
    // include variables and mixins to each component
    .pipe($.insert.prepend([
      '@import "variables";',
      '@import "mixins";',
    ].join('\n')))
    .pipe($.postcss(config, {syntax: scss}))
    // Minify css to reduce difference
    .pipe($.minifyCss(minConf))
    // Format css to reduce difference
    .pipe($.postcss([cssfmt]))
    // Rename: _file.scss => file.css
    .pipe($.rename(function(path) {
      path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename,
      path.extname = '.css'
    }))
    .pipe(gulp.dest('dist/components'))
})

/*
 * Process css to json for each component
 */
gulp.task('cases', function(done) {
  var jsonify = require('./src/jsonify')
  var fs = require('fs')
  var path = require('path')
  var cases = 'test/components'
  var postcss = require('postcss')

  function read(file) {
    return fs.readFileSync(path.join(cases, file)).toString();
  }
  fs.readdirSync(cases).forEach(function (file, index, arr) {
    var isDone = (index == arr.length - 1)
    if (path.extname(file) !== '.css') return isDone ? done() : null
    var name = path.basename(file, '.css')
    var css = read(name + '.css').trim()
    var root = postcss.parse(css, { from: '/' + name + '.css' })
    fs.writeFile(path.join(cases, name + '.json'), jsonify(root) + '\n', function(err) {
      if (err) throw err
      return isDone ? done() : null
    })
  })
})

/*
 * Preprocess components from bootstrap with sass for tests
 */
gulp.task('components-sass', function() {
  return gulp.src('bootstrap/scss/_{'+components.join(',')+'}.scss')
    // include variables and mixins to each component
    .pipe($.insert.prepend([
      '@import "variables";',
      '@import "mixins";',
    ].join('\n')))
    .pipe($.sass({processUnderscored: true}))
    // Use bootstrap default postcss config
    .pipe($.postcss(bsConfig))
    // Minify css to reduce difference
    .pipe($.minifyCss(minConf))
    // Format css to reduce difference
    .pipe($.postcss([cssfmt]))
    // Rename: _file.css => file.css
    .pipe($.rename(function(path) {
      path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
    }))
    .pipe(gulp.dest('test/components'))
})


/*
 * Run tests
 */
gulp.task('test', function() {
    return gulp.src('test/*.js', { read: false }).pipe($.mocha({reporter: require('./src/custom-reporter')}))
})

gulp.task('default', ['bootstrap'])
