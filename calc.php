<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

echo "wtf";

$client = new GuzzleHttp\Client();
$response = $client->get('https://picsum.photos/list');

$body = $response->getBody();

echo $body;
