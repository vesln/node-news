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
 * Reddit constructor.
 */
function Reddit() {
  this.url = 'http://reddit.com/.json';
};

/**
 * Returns the popular items.
 * 
 * @param {Function} Callback.
 * @api public
 */
Reddit.prototype.get = function(fn) {
  var self = this;
  request.get(this.url, function (err, res, body) {
    if (err) return fn(err);
    fn(null, self.parse(body));
  });
};

/**
 * Parses a response body.
 * 
 * @param {String} Body.
 * @returns {Object}
 * @api private
 */
Reddit.prototype.parse = function(body) {
  return JSON.parse(body).data.children;
};

/**
 * Expose `Reddit`.
 */
module.exports = Reddit;