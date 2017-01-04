module.exports = function(grunt) {
  grunt.initConfig ({
    concat: {
      release: {
        src:['js/values.js', 'js/prompt.js','js/getImages.js'],
        dest:'release/main.js'
      }
    },
    copy: {
      release: {
        src:'manifest.json',
        dest:'release/manifest.json'
      }
    },
    jshint: {
      //options: {
        //jshintrc:'.jshintrc'
      //},
      files:['js/values.js','js/prompt.js','js/getImages.js']
    },
    watch: {
      files:['<%=jshint.files%>', 'manifest.json'],
      tasks:['default']
    },
    jsdoc: {
      dist: {
        src:['js/*.js'],
        dest:'doc'
      }
    },
    jasmine: {
      test: {
        src: ['js/value.js', 'js/prompt.js', 'js/getImages.js', 'js/replaceImages.js','js/main.js'],
        options: {
          specs:'test/*.js'
        }
      }
    }
  });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', ['jshint', 'concat', 'copy']);
};