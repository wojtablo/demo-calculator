'use strict';

const gulpSequence = require('gulp-sequence');

module.exports = function (gulp, plugin, config) {
	gulp.task('compile', function (callback) {
		gulpSequence(
			'styles',
			'scripts',
			'images'
		)(callback);
	});
};
