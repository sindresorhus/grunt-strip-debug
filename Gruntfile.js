'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		stripDebug: {
			test: {
				files: {
					'tmp/fixture.js': 'fixture.js'
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test.js'
			}
		},
		clean: {
			test: ['tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', [
		'clean',
		'stripDebug',
		'simplemocha',
		'clean'
	]);
};
