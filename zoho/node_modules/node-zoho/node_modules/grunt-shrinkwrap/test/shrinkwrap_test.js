'use strict';

var grunt = require('grunt');

exports.shrinkwrap = {
  setUp: function(done) {
    done();
  },

  default_options: function(test) {
    test.expect(1);

    /*
     * We don't actually care what the contents of npm-shrinkwrap.json is that's npm's job.
     * We just care that it was generated.
     */
    test.ok(grunt.file.exists('npm-shrinkwrap.json'), 'should have generated an npm-shrinkwrap.json');

    test.done();
  }
};
