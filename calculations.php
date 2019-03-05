<?php
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
?>


