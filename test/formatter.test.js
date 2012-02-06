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
      var formatter = new Formatter([{title: 'foo', link: 'http://example.com'}]);
      formatter.format(function(data) {
        data.should.match(/\n    1\.  foo /); // TODO: fixme
        done();
      });
    });
  });
});