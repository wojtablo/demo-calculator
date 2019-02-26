const gulp = require('gulp');
const fs = require('fs');

import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

const CONFIG = {
    localDomain: "calculator.localhost",
    development: !!$.util.env.development,
    publicProduction: "../public/s/",
    publicDevelopment: "../public/debug/",
    public: "../public/",
    deployPublicProduction: "../../../website/public_html/public/s/",
    deployPublicDebug: "../../../website/public_html/public/debug/",
    IMAGES: "./gfx/**/**/**/**/*",
    FONTS: "./fonts/*",
    STYLES: "./styles/**/*.scss",
    SCRIPTS: {}
};

fs.readdirSync('./gulp').filter(function(file) {
    return (/\.(js)$/i).test(file);
}).forEach(function(file) {
    require('./gulp/' + file)(gulp, $, CONFIG);
});
