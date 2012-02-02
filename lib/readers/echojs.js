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
 * Echojs constructor.
 */
function Echojs() {
  this.url = 'http://www.echojs.com/rss';
};

util.inherits(Echojs, Rss);

/**
 * Expose `Hackernews`.
 */
module.exports = Echojs;