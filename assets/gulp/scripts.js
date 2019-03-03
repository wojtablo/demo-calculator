'use strict';

const streamqueue = require('streamqueue');

module.exports = function(gulp, plugin, config) {
	// -------------------------------------------
	// Package:  Custom core files
	// Description: custom scripts from us
	// -------------------------------------------
	gulp.task('scripts', () => {
		return streamqueue(
			{objectMode: true},
			gulp.src(config.SCRIPTS)
				.pipe(plugin.babel({
					presets: ['es2015']
				}))
				.pipe(plugin.if(!config.development, plugin.concat('bundle.min.js')))
				.pipe(plugin.if(!config.development, plugin.uglify()))
				.pipe(plugin.size({showFiles: true}))
		)
			.pipe(config.development
				? gulp.dest(config.publicDevelopment + 'js/')
				: gulp.dest(config.publicProduction + 'js/'));
	});

};
