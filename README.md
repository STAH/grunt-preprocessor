grunt-preprocessor
------------------

Grunt task to preprocess JS files using [preprocessor](https://github.com/dcodeIO/Preprocessor.js).

Getting Started
===============

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-preprocessor`.

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks("grunt-preprocessor");
```

[getting_started]: https://github.com/gruntjs/grunt/wiki/Getting-started
[grunt]: http://gruntjs.com

Documentation
=============

### Options

##### `root` _default_: `.`
Include path

### Options

##### `separator`
Type: `String`
Default: `grunt.util.linefeed`

Multiple files will be joined on this string. If you're processing concatenated JavaScript files with a minifier, you may need to use a semicolon `';'` as the separator.

##### `context`
Preprocessor context.

##### `mergeEnv`
Merge preprocessor context with the process environment variables. Default true.

### Example #1

```javascript
grunt.initConfig({
  preprocessor: {
    main: {
      options: {
        root: "app/includes",
        context: {
          DEBUG: true
        }
      },
      files: {
        "build/main.js": "app/main.js"
      }
    }
  }
});
```

### Example #2
Concat multiple files and process them

```javascript
grunt.initConfig({
  preprocessor: {
    main: {
      options: {
        root: "app/includes",
        context: {
          DEBUG: true
        }
      },
      files: {
        "build/main.js": "app/main.js",
        "build/extras.js": ["app/libs.js", "app/additional.js"],
      }
    }
  }
});
```

Contributing
============

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

Release History
===============
*   __11/02/2013 - 0.4.0__: Update grunt-contrib-jshint / Remove grunt.util._ (@shinnn)
*   __07/02/2013 - 0.3.0__: Support multiple targets and globbing (@rvock)
*   __20/08/2013 - 0.2.0__: Introduce context with process.env merge.
*   __26/07/2013 - 0.1.0__: Initial release.

License
=======

Copyright (c) 2014 Stanislav Lesnikov and contributors
Licensed under the MIT license.
