/*
 * grunt-jam3license
 * https://github.com/Jam3/grunt-jam3license
 *
 * Copyright (c) 2014 Mikko Haapoja
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function( grunt ) {
    
    grunt.task.registerTask('jam3license', 'Log stuff.', function() {

      var o = this.options();

      grunt.loadNpmTasks( 'grunt-license' );

      grunt.config.merge( {

        license: {

          withLicense: {

            depth: null,
            output: '.licenses',
            include: o.include
          },

          withoutLicense: {

            unknown: true,
            depth: null,
            output: '.nolicenses',
            include: o.include
          }
        },

        outputlicense: {

          options: {

            warn: o.warn,
            outFile: o.outFile,
            acceptable: o.acceptable  
          }
        }
      });

      grunt.task.run( [ 'license', 'outputlicense', 'cleanlicense' ] );
    });  
};
