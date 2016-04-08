# grunt-strip-debug [![Build Status](https://travis-ci.org/sindresorhus/grunt-strip-debug.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-strip-debug)

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with [strip-debug](https://github.com/sindresorhus/strip-debug)


## Install

```
$ npm install --save-dev grunt-strip-debug
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	stripDebug: {
		dist: {
			files: {
				'dist/app.js': 'src/app.js'
			}
		}
	}
});

grunt.registerTask('default', ['stripDebug']);
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
