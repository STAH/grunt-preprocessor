/*
 * grunt-preprocessor
 * https://github.com/STAH/grunt-preprocessor
 *
 * Copyright (c) 2014 Stanislav Lesnikov and contributors
 * Licensed under the MIT license.
 * https://github.com/STAH/grunt-preprocessor/blob/master/LICENSE-MIT
 */


module.exports = function (grunt) {
  "use strict";
  
  var _ = require('lodash');

  grunt.registerMultiTask("preprocessor", "Grunt task to preprocess JS files.", function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      separator: ';\n',
      merge_env : true
    });

    var root = options.root || grunt.util.linefeed,
      context = options.context || {};
    if(options.merge_env){
        _.extend(context, process.env);
    }

    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      var sourceCompiled = processFile(src, root, context);

      grunt.file.write(f.dest, sourceCompiled);
      grunt.log.write("[preprocessor] Processed " + f.dest + "\n");
    });
  });

  function processFile(source, root, context) {
    var Preprocessor = require("preprocessor");

    var pp = new Preprocessor(source, root);

    try {
      return pp.process(context);
    } catch (e) {
      grunt.log.error(e);
      grunt.fail.warn("processor failed to process.");
    }

    return '';
  }
};
