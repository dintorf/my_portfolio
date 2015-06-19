module.exports = function (grunt) {

	// Load Grunt tasks declared in the package.json file
  	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// grunt-contrib-connect will serve the files of the project
    	// on specified port and hostname
		connect: {
	        options:{
	          port: 9000,
	          hostname: "0.0.0.0",
	          livereload: true,
	          // Prevents Grunt to close just after the task (starting the server) completes
	          // This will be removed later as `watch` will take care of that
	          base: 'public'
	        },
		    livereload: {
		        options: {
		          open: true,
		          base: ['public']
				}
			}
		},
	    // grunt-open will open your browser at the project's URL
	    open: {
	      all: {
	        // Gets the port from the connect configuration
	        path: 'http://localhost:<%= connect.all.options.port%>'
	      }
	    },
		uglify: {
			options: {
				mangle: false,
				compress: true,
				sourceMap: "public/src/dist/js/app.map",
				banner: '/* Dylan Intorf (@dintorf) | dintorf.com | Apache Licensed */\n'
			},
			app: {
				src: "public/src/dist/js/app.js",
				dest: "public/src/dist/js/app.min.js"
			}
		},
		cssmin: {
		   dist: {
		      options: {
		         banner: '/* Dylan Intorf (@dintorf) | dintorf.com | Apache Licensed */\n'
		      },
		      src: "public/src/dist/css/app.css",
			  dest: "public/src/dist/css/app.min.css"
		  }
		},
		imagemin: {
			dist: {
		      options: {
		        optimizationLevel: 7
		      },
		      files: [{
		         expand: true,
		         cwd: "public/images",
		         src: ['*.{png,jpg,gif}'],
		         dest: 'public/images/dist'
		      }]
		   }
		},
		// jshint: {
		// 	options: {
		// 		jshintrc: ".jshintrc"
		// 	},
		// 	target: {
		// 		src: 'public/src/js/*'
		// 	}
		// }
		concat: {
			options: {
				separator: ";",
				banner: '/* Dylan Intorf (@dintorf) | dintorf.com | Apache Licensed */\n'
			},
			target: {
				src: [
					"public/lib/jquery/dist/jquery.js",
					"public/lib/bootstrap/dist/js/bootstrap.js",
					"public/lib/angular/angular.js",
					"public/lib/angular-route/angular-route.js",
					"public/lib/angular-resource/angular-resource.js",
					"public/lib/github-activity.js",
					"public/lib/Gitgraph.js",
					"public/src/js/*"
				],
				dest: "public/src/dist/js/app.js"
			}
		},
		concat_css: {
		    options: {
		      // Task-specific options go here. 
		    },
		    all: {
		      src: [
		      	"public/lib/bootstrap/dist/css/bootstrap.css",
		      	"public/src/css/*", 
		      ],
		      dest: "public/src/dist/css/app.css"
		    }
		},
		watch: {
			options: {
		    	livereload: true
		    },
			scripts: {
				files: ["public/src/js/*"],
				tasks: ["concat", "uglify"]
			},
			styles: {
				files: ["public/src/css/*"],
				tasks: ["concat_css", "cssmin"]
			},
			html: {
				files: ["public/views/**/*", "public/index.html"]
			}
		},
		nodeunit: {
			target: 'public/src/tests/*_test.js'
		}//,
		// clean: {
		// 	target: ['public/src/dist', 'public/src/js']
		// }
	});

	// grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-concat-css');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-nodeunit');
	// grunt.loadNpmTasks('grunt-contrib-imagemin');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask("default", ['concat', 'concat_css', 'uglify', 'cssmin']);
	// grunt.registerTask("reboot", ['clean','default']);

	// Creates the `server` task
	grunt.registerTask('server',[
		// Open before connect because connect uses keepalive at the moment
		// so anything after connect wouldn't run
		'connect:livereload',
		'watch'
	]);
}