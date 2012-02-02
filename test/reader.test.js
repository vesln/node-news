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
var util = require('util');

/**
 * The tested object.
 */
var request = require('request');
var Reader = require('../lib/reader');

var Child = function() {};
util.inherits(Child, Reader);
Child.prototype.parse = function(body, cb) {
  cb(null, ['foo']);
};


describe('Reader', function() {
  describe('.get()', function() {
    it('should return error if any', function(done) {
      request.stub('get').and.replace(function(url, cb) {
        cb(new Error('foo'));
      });
      var reader = new Child;
      reader.get(function(err) {
        err.should.be.an.instanceof(Error);
        request.get.reset();
        done();
      });
    });
    
    it('should parse and return the results', function(done) {
      request.stub('get').and.replace(function(url, cb) {
        cb(null, null, null);
      });
      var reader = new Child;
      reader.get(function(err, data) {
        (err == null).should.be.true;
        data.should.eql(['foo']);
        request.get.reset();
        done();
      });
    });
  });
});