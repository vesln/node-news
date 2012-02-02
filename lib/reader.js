/*!
 * News - Hacker news and reddit in the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Module dependencies.
 */ 
var request = require('request');

/**
 * Reader constructor.
 */
function Reader() {};

/**
 * Returns the popular items.
 * 
 * @param {Function} Callback.
 * @api public
 */
Reader.prototype.get = function(fn) {
  var self = this;
  request.get(this.url, function (err, res, body) {
    if (err) return fn(err);
    self.parse(body, function(err, data) {
      if (err) return fn(err);
      fn(null, data);
    })
  });
};

/**
 * Expose `Reader`.
 */
module.exports = Reader;