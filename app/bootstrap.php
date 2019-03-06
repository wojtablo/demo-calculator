<?php
/**
 * Created by IntelliJ IDEA.
 * User: Wojciech Mikolajewski
 * Date: 2019-03-06
 */

// Auto load dependencies from Composer
require_once __DIR__.'/vendor/autoload.php';

// Initialize Twig templates
$templates = new Twig_Loader_Filesystem(__DIR__ . '/templates');
$twig = new Twig_Environment($templates);

$calculator = new \Izing\Calculator();
