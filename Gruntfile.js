module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			task: {}
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			task: {
				expand: true,
				src: ['**/*.html', '!**/index.html', '!node_modules/**'],
				rename: function (dest, src) {
					return src.replace(/[^\/]+$/, 'index.html');
				}
			}
		},
		less: {
			options: {
				cleancss: true
			},
			task: {
				expand: true,
				src: ['**/*.less', '!node_modules/**'],
				ext: '.css'
			}
		},
		concat: {
			task: {
				files: {
					'vendor.js': [
						'bower_components/jquery/dist/jquery.min.js',
						'bower_components/lodash/dist/lodash.min.js',
						'bower_components/backbone/backbone.js',
						'bower_components/moment/min/moment.min.js',
						'bower_components/mustache/mustache.js',
						'bower_components/widowtamer/widowtamer-min.js'
					]
				}
			}
		},
		watch: {
			htmlmin: {
				files: ['**/*.html', '!**/index.html'],
				tasks: ['htmlmin'],
				options: {
					livereload: true
				}
			},
			less: {
				files: ['**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect', 'watch']);

};
