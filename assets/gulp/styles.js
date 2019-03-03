'use strict';

const sassdoc = require('sassdoc');

module.exports = function (gulp, plugin, config) {

	let sassOptions = {
		outputStyle: config.development ? 'expanded' : 'compressed',
		precision: 10
	};

	let sassdocOptions = {
		dest: './sassdoc',
		verbose: true,
		display: {
			access: ['public', 'private'],
			alias: true,
			watermark: true,
		},
		groups: {
			'undefined': 'Ungrouped',
			foo: 'Foo group',
			bar: 'Bar group',
		},
		basePath: 'https://github.com/SassDoc/sassdoc',
	};

	gulp.task('styles', () => {

		return gulp.src([config.STYLES])
			.pipe(plugin.plumber())
			.pipe(plugin.sass.sync(sassOptions).on('error', plugin.sass.logError))
			.pipe(plugin.autoprefixer({
				browsers: ['last 2 version', '> 5%', 'safari 5', 'ios 6', 'android 4'],
				cascade: false
			}))
			.pipe(plugin.if(config.development, plugin.sourcemaps.init()))
			.pipe(plugin.if(config.development, plugin.sourcemaps.write('./')))
			.pipe(plugin.if(config.development, gulp.dest(config.publicDevelopment + 'css/'), gulp.dest(config.publicProduction + 'css/')))
			.pipe(plugin.if(config.deploy, gulp.dest(config.publicDevelopment + 'css/')))
			.pipe(plugin.if(config.development, sassdoc(sassdocOptions)))
			.pipe(plugin.size({showFiles: true}));
	});

};
