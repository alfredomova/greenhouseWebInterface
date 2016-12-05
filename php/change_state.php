<?php

        if (PHP_SAPI === 'cli') {
                $pin = $argv[1];
                $state = $argv[2];
        } else {
                $pin = $_GET['pin'];
                $state = $_GET['state'];
        }

        $url = "http://localhost:8000/GPIO/";
        $url .= $pin;
        $url .= "/value/";
        $url .= $state;

        $ch = curl_init( $url );

        curl_setopt( $ch, CURLOPT_POST, 1);
        curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt( $ch, CURLOPT_HEADER, 0);
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

        $response = curl_exec( $ch );

?>
{
        "result" : "ok"
}