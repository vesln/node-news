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
var Rss = require('../../lib/readers/rss');

describe('Rss', function() {
  describe('.get()', function() {
    it('should parse and return the results', function(done) {
      var body = '<rss version="2.0"><channel><title>Hacker News</title><link>http://news.ycombinator.com/</link><description>Links for the intellectually curious, ranked by readers.</description><item><title>Handwriting to LaTeX maths</title><link>http://webdemo.visionobjects.com/equation.html?locale=default</link><comments>http://news.ycombinator.com/item?id=3542534</comments><description><![CDATA[<a href="http://news.ycombinator.com/item?id=3542534">Comments</a>]]></description></item><item><title>Handwriting to LaTeX maths</title><link>http://webdemo.visionobjects.com/equation.html?locale=default</link><comments>http://news.ycombinator.com/item?id=3542534</comments><description><![CDATA[<a href="http://news.ycombinator.com/item?id=3542534">Comments</a>]]></description></item></channel></rss>';
      request.stub('get').and.replace(function(url, cb) {
        cb(null, null, body);
      });
      var rss = new Rss;
      rss.get(function(err, data) {
        (err == null).should.be.true;
        data.should.eql([ { title: 'Handwriting to LaTeX maths',
            link: 'http://webdemo.visionobjects.com/equation.html?locale=default',
            comments: 'http://news.ycombinator.com/item?id=3542534',
            description: '<a href="http://news.ycombinator.com/item?id=3542534">Comments</a>' },
          { title: 'Handwriting to LaTeX maths',
            link: 'http://webdemo.visionobjects.com/equation.html?locale=default',
            comments: 'http://news.ycombinator.com/item?id=3542534',
            description: '<a href="http://news.ycombinator.com/item?id=3542534">Comments</a>' } ]);
        request.get.reset();
        done();
      });
    });
  });
});