<?php
/**
 * Created by IntelliJ IDEA.
 * User: Wojciech Mikolajewski
 * Date: 2019-03-06
 */

// Bootstrap application
require_once 'app/bootstrap.php';

// That's not perfect..
if($_POST['userDataObject']) $calculator->validateUsersData($_POST['userDataObject']);

// Calculator is displayed at domain's homepage
echo $twig->render('partials/calculator.html');
?>
