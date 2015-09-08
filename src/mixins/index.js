var fn = require('../functions')

/*
 * JavaScript mixin example.
 * Rewrite of @mixin alert-variant
 */
module.exports["alert-variant"] = function (css, background, border, bodyColor) {
   return {
     'background-color': background,
     'border-color': border,
     color: bodyColor,

     'hr': {
       "border-top-color": 'darken('+border+', 0.05)'
     },
     '.alert-link': {
       color: 'darken('+bodyColor+', 0.01)'
     }
   }
}
