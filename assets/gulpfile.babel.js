const fs = require('fs');
const gulp = require('gulp');

const CONFIG = {
	server: {
		domain: 'calculator.localhost',
		port: {
			website: 3000,
			panel: 3001
		},
	},
	assets: {
		images: './gfx/',
		styles: './styles/**/*.scss',
		scripts: './scripts/**/*.js',
		pages: '../*.php'
	},
	public: {
		dir: '../public/s/',
		images: '../public/s/gfx/',
		styles: '../public/s/css/',
		scripts: '../public/s/js/'
	}
};

// Require all task files in gulp directory
fs.readdirSync('./gulp').filter(function(file) {
	return (/\.(js)$/i).test(file);
}).forEach(function(file) {
	require('./gulp/' + file)(gulp, CONFIG);
});
