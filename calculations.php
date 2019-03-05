<?php

// Auto load dependencies from Composer
require_once __DIR__.'/app/vendor/autoload.php';

// Initialize Twig templates
$templates = new Twig_Loader_Filesystem(__DIR__ . '/app/templates');
$twig = new Twig_Environment($templates);

    $calcData = $_POST['calcData'];
    if($calcData){
        generateCsvFile($calcData);
    }
    else {
        displayCalculatorLogs();
    }

    function generateCsvFile($object){
        echo "ok";
        print_r($object);
        echo $object['result'];
        echo $object['browser'];
        echo $object['ip'];
        echo $object['date'];
        $fp = fopen('./data/file.csv', 'a');
        fputcsv($fp, $object);
        fclose($fp);
    }

    function displayCalculatorLogs(){
        $csv = array_map('str_getcsv', file('./data/file.csv'));

        if(count($csv)>0){
            $table = '';
            $table .= '<table border="1">';
            foreach($csv as $row) {
                $table .= '<tr>';
                foreach($row as $cell) {
                    $table .= '<td>'.$cell.'</td>';
                }
                $table .= '</tr>';
            }
            $table .= '</table>';
            echo $table;
        }
    }

    // Create a product list
    $products = [
        [
            'name'          => 'Notebook',
            'description'   => 'Core i7',
            'value'         =>  800.00,
            'date_register' => '2017-06-22',
        ],
        [
            'name'          => 'Mouse',
            'description'   => 'Razer',
            'value'         =>  125.00,
            'date_register' => '2017-10-25',
        ],
        [
            'name'          => 'Keyboard',
            'description'   => 'Mechanical Keyboard',
            'value'         =>  250.00,
            'date_register' => '2017-06-23',
        ],
    ];

    // Render our view
    echo $twig->render('partials/calculations.html', ['products' => $products] );
?>


