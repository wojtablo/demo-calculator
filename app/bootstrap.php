<?php
/**
 * Created by IntelliJ IDEA.
 * User: Wojciech Mikolajewski
 * Date: 2019-03-06
 */

define("VENDOR_AUTOLOAD_FILEPATH", __DIR__.'/vendor/autoload.php');
define("NODE_PACKAGES_FILEPATH", './assets/node_modules/');
define("NODE_PACKAGES_LOCK_FILEPATH", './assets/package-lock.json');
define("BUNDLED_CSS", './public/s/css/main.css');
define("BUNDLED_JS", './public/s/js/bundle.min.js');

/**
 * Check if Composer dependencies are installed
 */
if (file_exists(VENDOR_AUTOLOAD_FILEPATH) && is_readable(VENDOR_AUTOLOAD_FILEPATH))
{
    // Require auto-generated file by Composer
    require_once VENDOR_AUTOLOAD_FILEPATH;

    // Initialize Twig templates
    $templates = new Twig_Loader_Filesystem(__DIR__ . '/templates');
    $twig = new Twig_Environment($templates);

    // Initialize Calculator
    $calculator = new \Izing\Calculator();
}
else
{
    throw new Exception('Composer autoload file does not exist. Install Composer dependencies \'composer install\' .');
}

/**
 * Check if NPM Packages are installed
 */
if (!is_dir(NODE_PACKAGES_FILEPATH) || !file_exists(NODE_PACKAGES_LOCK_FILEPATH)){
    throw new Exception('NPM packages not found. Go to assets directory and run \'npm install\'' );
}

/**
 * Check if public assets was compiled
 */
if (!file_exists(BUNDLED_CSS) || !file_exists(BUNDLED_JS)){
    echo 'Hey! It looks like CSS and JavaScript files are missing. Make sure to run \'gulp build\' or \'gulp install\' in assets directory';
}
