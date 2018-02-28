'use strict';
const stripDebug = require('strip-debug');

module.exports = grunt => {
	grunt.registerMultiTask('stripDebug', 'Strip console and debugger statements', function () {
		for (const file of this.files) {
			grunt.file.write(file.dest, stripDebug(grunt.file.read(file.src[0])));
		}
	});
};
