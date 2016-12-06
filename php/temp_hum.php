<?php

        $url = "http://localhost:8000/macros/temperature";

        $ch = curl_init( $url );
        # sudo apt-get install php5-curl

        curl_setopt( $ch, CURLOPT_POST, 1);
        curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt( $ch, CURLOPT_HEADER, 0);
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

        $response = curl_exec( $ch );

		print_r($response);

?>