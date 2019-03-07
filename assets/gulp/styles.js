const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssnano')
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const prefix = require('gulp-autoprefixer');
const sourcemaps  = require('gulp-sourcemaps');
const print = require('gulp-print').default;

module.exports = function (gulp, CONFIG) {

	let _sassOptions = {
		outputStyle: 'expanded'
	};

	let _prefixerOptions = {
		browsers: ['last 2 versions']
	};


	gulp.task('styles', function() {
		return gulp.src([CONFIG.assets.styles])
			.pipe(plumber())
			.pipe(print())
			.pipe(sourcemaps.init())
			.pipe(sass(_sassOptions))
			.pipe(prefix(_prefixerOptions))
			.pipe(rename('main.css'))
			.pipe(gulp.dest(CONFIG.public.styles))
			.pipe(cssmin())
			.pipe(rename({ suffix: '.min' }))
			.pipe(gulp.dest(CONFIG.public.styles));
	});

	gulp.task('sass-lint', function() {
		gulp.src([CONFIG.assets.styles])
			.pipe(sassLint())
			.pipe(sassLint.format())
			.pipe(sassLint.failOnError());
	});

};
