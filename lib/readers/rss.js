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
 * Rss constructor.
 */
function Rss() {};

util.inherits(Rss, Reader);

/**
 * Parses a response body.
 * 
 * @param {String} Body.
 * @returns {Object}
 * @api private
 */
Rss.prototype.parse = function(body, fn) {
  var parser = new xml2js.Parser;
  parser.parseString(body, function (err, result) {
    if (err) return fn(err);
    fn(null, result.channel.item);
  });
};

/**
 * Expose `Rss`.
 */
module.exports = Rss;