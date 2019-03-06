<?php
/**
 * Created by IntelliJ IDEA.
 * User: Wojciech Mikolajewski
 * Date: 2019-03-06
 */

// Bootstrap application
require_once 'app/bootstrap.php';

// Render Calculations partial view
echo $twig->render('partials/calculations.html', ['users' => $calculator->convertCsvResultsToArray()] );

?>


