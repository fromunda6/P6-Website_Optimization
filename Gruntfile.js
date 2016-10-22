module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  uglify: {
  	build: {
  		src: 'js/perfmatters.js',
  		dest: 'js/perfmatters.min.js'
  	}
  }
});

  grunt.loadNpmTasks('grunt-contrib-uglify'); //alerting Grunt of intention to use this
  grunt.registerTask('default', ['uglify']); //associating commands to execute with Grunt command
};