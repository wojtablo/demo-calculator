<?php
require '../vendor/autoload.php';
use GuzzleHttp\Client;

echo "ok";
print_r($_POST['calcData']);

//$client = new GuzzleHttp\Client();
//
//
//$response = $client->get('https://picsum.photos/list');
//
//$body = $response->getBody();
//
//echo $body;

//use GuzzleHttp\Client;
//use GuzzleHttp\HandlerStack;
//use GuzzleHttp\Middleware;
//
//$container = [];
//$history = Middleware::history($container);
//
//$stack = HandlerStack::create();
//// Add the history middleware to the handler stack.
//$stack->push($history);
//
//$client = new Client(['handler' => $stack]);
//
//$client->request('GET', 'https://picsum.photos/list');
//
//// Iterate over the requests and responses
//foreach ($container as $transaction) {
//    echo (string) $transaction['request']->getBody(); // Hello World
//}
