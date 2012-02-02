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
var Reddit = require('../../lib/readers/reddit');

describe('Reddit', function() {
  describe('.get()', function() {
    it('should make an request to hackernews', function(done) {
      request.stub('get').and.replace(function(url, cb) {
        url.should.eql('http://reddit.com/.json');
        done();
      });
      var reddit = new Reddit;
      reddit.get();
    });
    
    it('should return error if any', function(done) {
      request.stub('get').and.replace(function(url, cb) {
        cb(new Error('foo'));
      });
      var reddit = new Reddit;
      reddit.get(function(err) {
        err.should.be.an.instanceof(Error);
        done();
      });
    });
    
    it('should parse and return the results', function(done) {
      var body = JSON.stringify({
        data: {
          children: ['foo']
        }
      });
      request.stub('get').and.replace(function(url, cb) {
        cb(null, null, body);
      });
      var reddit = new Reddit;
      reddit.get(function(err, data) {
        (err == null).should.be.true;
        data.should.eql(['foo']);
        done();
      });
    });
  });
});