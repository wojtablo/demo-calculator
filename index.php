<?php
// Auto load dependencies from Composer
require_once __DIR__.'/app/vendor/autoload.php';

// Initialize Twig templates
$templates = new Twig_Loader_Filesystem(__DIR__ . '/app/templates');
$twig = new Twig_Environment($templates);

// Calculator is displayed at domain's homepage
echo $twig->render('partials/calculator.html');
?>
