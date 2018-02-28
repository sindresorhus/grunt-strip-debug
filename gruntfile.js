'use strict';
module.exports = grunt => {
	grunt.initConfig({
		stripDebug: {
			test: {
				files: {
					'tmp/fixture.js': 'fixture.js'
				}
			}
		},
		clean: {
			test: ['tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', [
		'clean',
		'stripDebug'
	]);
};
