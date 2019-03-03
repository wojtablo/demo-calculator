'use strict';

const browser = require('browser-sync');

module.exports = function (gulp, plugin, config) {
	// Start a server with LiveReload to preview the site in
	gulp.task('server', ['compile'], function () {
		browser.init({
			//server: 'dist',
			port: config.port.website,
			ui: {
				port: config.port.panel
			},
			proxy: {
				target: config.domain,
				middleware: function (req, res, next) {
					console.log(req.url);
					next();
				}
			}
		});
	});

	// Build the site, run the server, and watch for file changes
	gulp.task('default', ['server'], function () {
		gulp.watch(['styles/**/*.scss'], ['styles', browser.reload]);
		gulp.watch(['scripts/**/*.js'], ['scripts', browser.reload]);
		gulp.watch(['../*.php'], browser.reload);
	});
};
