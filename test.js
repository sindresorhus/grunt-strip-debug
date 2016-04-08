'use strict';
/* eslint-env mocha */
var assert = require('assert');
var grunt = require('grunt');

it('should strip debugging', function () {
	assert.equal(grunt.file.read('tmp/fixture.js'), 'function test(){}\n');
});
