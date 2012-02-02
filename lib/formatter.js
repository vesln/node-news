/*!
 * News - Hacker news and reddit in the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Module dependencies.
 */
var word = require('word');
var async = require('async');
var colors = require('colors');

/**
 * Formatter constructor.
 * 
 * @param {Object} Data.
 */
function Formatter(data) {
  this.data = data;
};

/**
 * Formats the results.
 * 
 * @param {Function} Callback.
 * @api public
 */
Formatter.prototype.format = function(fn) {
  var out = '\n';
  var items = this.data;
  
  for (var i = -1, len = items.length; ++i < len;) {
    var title = items[i].title.replace('\n', ''); // For real.
    title = word.excerpt(title, 60)
    out += '    ' + (i + 1) + '. ';
    if (i < 9) out += ' ';
    out += title + '\n';
    out += '        ' + items[i].link.grey + '\n\n';
  }
  
  fn(out);
};

/**
 * Expose `Formatter`.
 */
module.exports = Formatter;