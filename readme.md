# grunt-strip-debug

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with [strip-debug](https://github.com/sindresorhus/strip-debug)


## Install

```
$ npm install --save-dev grunt-strip-debug
```


## Usage

```js
require('load-grunt-tasks')(grunt);

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
