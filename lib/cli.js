/*!
 * News - Hacker news and reddit in the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Module dependencies.
 */
var Redr = require('redr');
var optimist = require('optimist');
var path = require('path');

/**
 * Readers.
 * 
 * @type {Object}
 */
var readers = new Redr(path.join(__dirname, 'readers')).load();

/**
 * Formatter.
 * 
 * @type {Function}
 */
var Formatter = require('./formatter');

/**
 * Default reader.
 * 
 * @type {String}
 */
var defaults = 'hackernews';

/**
 * Expose the start function.
 */
module.exports = function() {
  
  /**
   * Argv.
   * 
   * @type {Object}
   */
  var argv = optimist.argv;
  
  /**
   * The reader.
   * 
   * @type {String}
   */
  var reader = new readers.get[argv._[0] || defaults];
  
  reader.get(function(err, data) {
    if (err) throw err;
    var formatter = new Formatter(data);
    
    formatter.format(function(out) {
      console.log(out);
    })
  });
};