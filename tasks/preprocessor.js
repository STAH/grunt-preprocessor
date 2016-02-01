/*
 * grunt-preprocessor
 * https://github.com/STAH/grunt-preprocessor
 *
 * Copyright (c) 2014-2016 Stanislav Lesnikov and contributors
 * Licensed under the MIT license.
 * https://github.com/STAH/grunt-preprocessor/blob/master/LICENSE-MIT
 */

module.exports = function main(grunt) {
  'use strict';

  var _ = require('lodash');

  function processFile(source, root, preserveLineNumbers, context) {
    var Preprocessor = require('preprocessor.js');

    var pp = new Preprocessor(source, root, preserveLineNumbers);

    try {
      return pp.process(context);
    } catch (e) {
      grunt.log.error(e);
      grunt.fail.warn('processor failed to process.');
    }

    return '';
  }

  grunt.registerMultiTask('preprocessor', 'Grunt task to preprocess JS files.', function task() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      separator: ';\n',
      preserveLineNumbers: false,
      mergeEnv: true
    });

    var root = options.root || grunt.util.linefeed;
    var preserveLineNumbers = options.preserveLineNumbers || false;
    var context = options.context || {};
    if (options.mergeEnv) {
      _.extend(context, process.env);
    }

    this.files.forEach(function doFiles(f) {
      // Concat specified files.
      var src = f.src.filter(function doSources(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        return true;
      }).map(function doFile(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      var sourceCompiled = processFile(src, root, preserveLineNumbers, context);

      grunt.file.write(f.dest, sourceCompiled);
      grunt.log.write('[preprocessor.js] Processed ' + f.dest + '\n');
    });
  });
};
