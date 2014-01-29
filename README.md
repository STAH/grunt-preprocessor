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
Preprocessor context (will be merged with process environment context)

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
        src: "app/main.js",
        dest: "build/main.js"
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
        src: ["app/main.js", "app/additional.js"],
        dest: "build/main-extras.js"
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
*   __20/08/2013 - 0.2.0__: Introduce context with process.env merge.
*   __26/07/2013 - 0.1.0__: Initial release.

License
=======

Copyright (c) 2013 Stanislav Lesnikov
Licensed under the MIT license.
