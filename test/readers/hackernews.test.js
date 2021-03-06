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
var Hackernews = require('../../lib/readers/hackernews');

describe('Hackernews', function() {
  describe('.get()', function() {
    it('should make an request to hackernews', function(done) {
      request.stub('get').and.replace(function(url, cb) {
        url.should.eql('http://news.ycombinator.com/rss');
        request.get.reset();
        done();
      });
      var hackernews = new Hackernews;
      hackernews.get();
    });
  });
});