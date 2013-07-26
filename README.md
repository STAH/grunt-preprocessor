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

##### `src`
Source file path

##### `dest`
Destination file path

### Example #1

```javascript
  config.preprocessor = {
    main: {
      root: "app/includes",
      src: "app/main.js",
      dest: "build/main.js"
    }
  };
```

Contributing
============

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

Release History
===============
*   __26/07/2013 - 0.1.0__: Initial release.

License
=======

Copyright (c) 2013 Stanislav Lesnikov
Licensed under the MIT license.
