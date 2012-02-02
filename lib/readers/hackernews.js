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
 * Rss base.
 * 
 * @type {Function}
 */
var Rss = require('./rss');

/**
 * Hackernews constructor.
 */
function Hackernews() {
  this.url = 'http://news.ycombinator.com/rss';
};

util.inherits(Hackernews, Rss);

/**
 * Expose `Hackernews`.
 */
module.exports = Hackernews;