# grunt-strip-debug [![Build Status](https://travis-ci.org/sindresorhus/grunt-strip-debug.png?branch=master)](https://travis-ci.org/sindresorhus/grunt-strip-debug)

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with [strip-debug](https://github.com/sindresorhus/strip-debug)


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```bash
$ npm install --save-dev grunt-strip-debug
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-strip-debug');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*


[grunt]: http://gruntjs.com
[Getting Started]: http://gruntjs.com/getting-started


### Example

```js
grunt.initConfig({
	stripDebug: {                              // task
		dist: {                                // target
			files: {                           // dictionary of files
				'dist/app.js': 'src/app.js'    // destination : source
			}
		}
	}
});

grunt.loadNpmTasks('grunt-strip-debug');
grunt.registerTask('default', ['stripDebug']);
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
