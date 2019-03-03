const gulp      = require('gulp');
const fs        = require('fs');
const plugins   = require('gulp-load-plugins')();

import gulpLoadPlugins from 'gulp-load-plugins';

const plugin = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});

const config = {
	domain: 'calculator.localhost',
	port: {
		website: 3000,
		panel: 3001
	},
	development: !!plugins.util.env.development,
	publicProduction: '../public/s/',
	publicDevelopment: '../public/debug/',
	public: '../public/',
	deployPublicProduction: '../../../website/public_html/public/s/',
	deployPublicDebug: '../../../website/public_html/public/debug/',
	IMAGES: './gfx/**',
	STYLES: './styles/**/*.scss',
	SCRIPTS: './scripts/*.js'
};

// Require all task files in gulp directory
fs.readdirSync('./gulp').filter(function(file) {
	return (/\.(js)$/i).test(file);
}).forEach(function(file) {
	require('./gulp/' + file)(gulp, plugin, config);
});

