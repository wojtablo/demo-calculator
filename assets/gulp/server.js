'use strict';

const browser = require('browser-sync');

module.exports = function (gulp, CONFIG) {

	gulp.task('server', function () {
		browser.init({
			//server: 'dist',
			port: CONFIG.server.port.website,
			ui: {
				port: CONFIG.server.port.panel
			},
			proxy: {
				target: CONFIG.server.domain,
				middleware: function (req, res, next) {
					//console.log(req.url);
					next();
				}
			}
		});
	});

	gulp.task('reload', function () {
		browser.reload();
	});

	gulp.task('watch', ['scripts', 'server'], function () {
		gulp.watch([CONFIG.assets.scripts], ['scripts', 'reload']);
		gulp.watch([CONFIG.assets.styles], ['styles', 'reload']);
		gulp.watch([CONFIG.assets.pages], ['reload']);
	});

};
