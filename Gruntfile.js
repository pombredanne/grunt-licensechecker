/*
 * grunt-jam3license
 * https://github.com/Jam3/grunt-jam3license
 *
 * Copyright (c) 2014 Mikko Haapoja
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    jam3license: {
      default_options: {
        options: {
        }
      },
      custom_options: {
        options: {
          acceptable: [ 'MIT', 'MIT/X11', 'BSD', 'ISC' ] 
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jam3license', 'nodeunit']);

  // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask( 'default', 'jam3license:custom_options' );
};
