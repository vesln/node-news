/*!
 * News - Hacker news and reddit in the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Module dependencies.
 */
var util = require('util');
var xml2js = require('xml2js');

/**
 * Reader base.
 * 
 * @type {Function}
 */
var Reader = require('../reader');

/**
 * Hackernews constructor.
 */
function Hackernews() {
  this.url = 'http://news.ycombinator.com/rss';
};

util.inherits(Hackernews, Reader);

/**
 * Parses a response body.
 * 
 * @param {String} Body.
 * @returns {Object}
 * @api private
 */
Hackernews.prototype.parse = function(body, fn) {
  var parser = new xml2js.Parser;
  parser.parseString(body, function (err, result) {
    if (err) return fn(err);
    fn(null, result.channel.item);
  });
};

/**
 * Expose `Hackernews`.
 */
module.exports = Hackernews;