'use strict';

var path = require('path');

module.exports = function (grunt) {

  grunt.initConfig({
    express: {
      server: {
        options: {
          port: 8080,
          bases: path.resolve(__dirname)
        }
      },
      livereload: true
    },
    curl: {
      Readium: {
        src: 'https://raw.github.com/readium/Readium-Web-Components/master/epub-modules/readium-js/out/Readium.js',
        dest: __dirname + '/lib/Readium.js'
      },
      ReadiumSync: {
        src: 'https://raw.github.com/readium/Readium-Web-Components/master/epub-modules/readium-js/out/Readium.syncload.js',
        dest: __dirname + '/lib/Readium.syncload.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-curl');
  grunt.registerTask('default', ['express', 'express-keepalive']);
  grunt.registerTask('update-readium', ['curl']);

};
