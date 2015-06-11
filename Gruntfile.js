module.exports = function (grunt) {

	grunt.initConfig({
		uglify: {
			options: {
				mangle: false,
				compress: true,
				sourceMap: "public/src/dist/app.map",
				banner: '/* Dylan Intorf Portfolio - dintorf-portfolio.parseapp.com */\n'
			},
			app: {
				src: "public/src/dist/all.js",
				dest: "public/src/dist/app.min.js"
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
				banner: "/* Dylan Intorf Portfolio - dintorf-portfolio.parseapp.com */\n"
			},
			target: {
				src: [
					"public/lib/jquery/dist/jquery.js",
					"public/lib/bootstrap/dist/js/bootstrap.js",
					"public/lib/angular/angular.js",
					"public/lib/angular-route/angular-route.js",
					"public/src/js/*"
				],
				dest: "public/src/dist/all.js"
			}
		},
		watch: {
			scripts: {
				files: ["public/src/js/*"],
				tasks: ["default"]
			}
		},
		nodeunit: {
			target: 'public/src/tests/*_test.js'
		}//,
		// clean: {
		// 	target: ['public/src/dist', 'public/src/js']
		// }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	// grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask("default", ['concat', 'uglify']);
	// grunt.registerTask("reboot", ['clean','default']);
}