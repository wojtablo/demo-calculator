const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const print = require('gulp-print').default;

module.exports = function(gulp, CONFIG) {

	gulp.task('scripts', function () {
		// app.js is your main JS file with all your module inclusions
		return browserify({entries: ['./scripts/app.js'], debug: true})
			.transform('babelify', { presets: ['@babel/preset-env'] })
			.bundle()
			.pipe(source('bundle.min.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(print())
			.pipe(sourcemaps.write('./maps'))
			.pipe(gulp.dest(CONFIG.public.scripts));
	});
};
