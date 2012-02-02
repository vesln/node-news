/*!
 * News - Hacker news and reader in the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var should = require('chai').should();
var jack = require('jack');

/**
 * The tested object.
 */
var request = require('request');
var Formatter = require('../lib/formatter');

describe('Formatter', function() {
  describe('.format()', function() {
    it('should format the supplied data', function(done) {
      var formatter = new Formatter([{title: 'foo', link: 'bar'}]);
      formatter.format(function(data) {
        data.should.eql('\n    1.  foo\n        \u001b[90mbar\u001b[39m\n\n');
        done();
      })
    });
  });
});