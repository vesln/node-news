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
  this.url = 'http://reddit.com/.json';
};

util.inherits(Hackernews, Reader);

/**
 * Parses a response body.
 * 
 * @param {String} Body.
 * @returns {Object}
 * @api private
 */
Hackernews.prototype.parse = function(body) {
  return JSON.parse(body).data.children;
};

/**
 * Expose `Hackernews`.
 */
module.exports = Hackernews;