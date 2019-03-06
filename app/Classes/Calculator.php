<?php
/**
 * Created by IntelliJ IDEA.
 * User: Wojciech Mikolajewski
* Date: 2019-03-06
*/

namespace Izing;


class Calculator
{
    const CALCULATION_RESULTS_FILEPATH = './logs/results.csv';

    /**
     * So, the Calculator has some features executed on server-side. Requires access to file system, so developer
     * better be sure about the permissions to file system for the web server user:group.
     *
     * Calculator constructor.
     */
    public function __construct()
    {
        // Open for writing only; place the file pointer at the beginning of the file and
        // truncate the file to zero length. If the file does not exist, attempt to create it.
        if(!is_file(static::CALCULATION_RESULTS_FILEPATH)){
            $file = fopen(static::CALCULATION_RESULTS_FILEPATH, 'w');
            fclose($file);
        }
    }

    /**
     * Return CSV content as an array
     *
     * @return array
     */
    function convertCsvResultsToArray()
    {
        return array_map('str_getcsv', file(static::CALCULATION_RESULTS_FILEPATH));
    }

    /**
     * If detect $_POST parameter matching the pattern, validate the content.
     *
     * @param array $postObject
     */
    function validateUsersData(array $postObject)
    {
        // Some advanced data validation can be done here. If all good then write log.
        $this->saveUserResultsToLogFile($postObject);
    }

    /**
     * Open log file for reading and writing; place the file pointer at the end of the file.
     * If the file does not exist, attempt to create it.
     *
     * @param $data array
     */
    private function saveUserResultsToLogFile(array $data)
    {
        $file = fopen(static::CALCULATION_RESULTS_FILEPATH, 'a');
        fputcsv($file, $data);
        fclose($file);
    }

}
