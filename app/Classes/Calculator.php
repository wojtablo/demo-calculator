<?php
/**
 * Created by IntelliJ IDEA.
 * User: Wojciech Mikolajewski
* Date: 2019-03-06
*/

namespace Izing;


use Jenssegers\Agent\Agent;

class Calculator
{
    // Path to log file
    const CALCULATION_RESULTS_FILEPATH = './logs/results.csv';

    // Private property to store instance of Agent class
    private $browser;

    /**
     * So, the Calculator has some features executed on server-side. Requires access to file system, so developer
     * better be sure about the permissions to file system for the web server user:group.
     *
     * It takes an instance of a class Agent as a parameter
     *
     * @param Agent $agent
     */
    public function __construct(Agent $agent)
    {
        $this->browser = $agent;

        // Open for writing only; place the file pointer at the beginning of the file and
        // truncate the file to zero length. If the file does not exist, attempt to create it.
        // Check if log file exists
        if (!is_dir(LOG_DIR))
        {
            die('Log directory not found in ./log, create directory and make sure it is writeable');
        }
        else
        {
            if(!is_file(static::CALCULATION_RESULTS_FILEPATH))
            {
                $file = fopen(static::CALCULATION_RESULTS_FILEPATH, 'w');
                fclose($file);
            }
        }


    }

    /**
     * Return CSV content as an array. Using PHP 7 Return Type Declarations.
     *
     * @return array
     */
    function convertCsvToArray(): array
    {
        $arrayResults = array_map('str_getcsv', file(static::CALCULATION_RESULTS_FILEPATH));
        $sortedArrayResults = array_reverse($arrayResults,true);
        return $sortedArrayResults;
    }

    /**
     * If detect $_POST parameter matching the pattern, validate the content.
     *
     * @param array $postObject
     */
    function validateUsersData(array $postObject): void
    {
        // Extend array with some data provided by PHP
        $postObject[] = $_SERVER['REMOTE_ADDR'];
        $postObject[] = date('m/d/Y H:i:s', time());
        $postObject[] = $this->browser->browser();

        // Some advanced data validation can be done here. If all good then write log.
        $this->saveUserResultsToLogFile($postObject);
    }

    /**
     * Open log file for reading and writing; place the file pointer at the end of the file.
     * By that time log file must exists, as it is checked in the constructor.
     *
     * @param $data array
     */
    private function saveUserResultsToLogFile(array $data): void
    {
        $file = fopen(static::CALCULATION_RESULTS_FILEPATH, 'a');
        fputcsv($file, $data);
        fclose($file);
    }

}
