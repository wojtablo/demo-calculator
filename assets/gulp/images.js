'use strict';

module.exports = function (gulp, plugin, config) {
	gulp.task('images', () => {
		return gulp.src([config.IMAGES])
			.pipe(
				plugin.if(
					config.development,
					gulp.dest(config.publicDevelopment + 'gfx/'),
					gulp.dest(config.publicProduction + 'gfx/')
				)
			)
			.pipe(
				plugin.size({showFiles: true})
			);
	});
};
