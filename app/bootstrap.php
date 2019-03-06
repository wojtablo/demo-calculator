<?php
/**
 * Created by IntelliJ IDEA.
 * User: Wojciech Mikolajewski
 * Date: 2019-03-06
 */

define("VENDOR_AUTOLOAD_FILEPATH", __DIR__.'/vendor/autoload.php');

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
    throw new Exception('Composer autoload file does not exist. Install Composer dependencies.');
}
