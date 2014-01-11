'use strict';
var eachAsync = require('each-async');
var stripDebug = require('strip-debug');

module.exports = function (grunt) {
	grunt.registerMultiTask('stripDebug', 'Strip console and debugger statements', function () {
		eachAsync(this.files, function (el, i, next) {
			grunt.file.write(el.dest, stripDebug(grunt.file.read(el.src[0])));
			next();
		}, this.async());
	});
};
