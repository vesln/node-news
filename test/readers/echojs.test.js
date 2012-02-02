/*!
 * News - Hacker news and reddit in the CLI.
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
var Echojs = require('../../lib/readers/echojs');

describe('Echojs', function() {
  describe('.get()', function() {
    it('should make an request to echojs', function(done) {
      request.stub('get').and.replace(function(url, cb) {
        url.should.eql('http://www.echojs.com/rss');
        request.get.reset();
        done();
      });
      var echojs = new Echojs;
      echojs.get();
    });
  });
});