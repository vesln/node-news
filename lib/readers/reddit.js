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
 * Reddit constructor.
 */
function Reddit() {
  this.url = 'http://reddit.com/.json';
};

util.inherits(Reddit, Reader);

/**
 * Parses a response body.
 * 
 * @param {String} Body.
 * @returns {Object}
 * @api private
 */
Reddit.prototype.parse = function(body, fn) {
  var data = null;
  var ret = [];
  
  try {
    data = JSON.parse(body).data.children
  } catch(err) {
    return cb(err);
  }
  
  data.forEach(function(item) {
    item.data.link = item.data.url;
    ret.push(item.data);
  });
  
  fn(null, ret);
};

/**
 * Expose `Reddit`.
 */
module.exports = Reddit;