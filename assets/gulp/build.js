'use strict';

module.exports = function (gulp) {

	gulp.task('build', ['scripts', 'styles']);

	gulp.task('default', ['build', 'watch']);

};
