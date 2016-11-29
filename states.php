<?php

$state_22 = file_get_contents("http://10.1.10.35:8000/GPIO/22/value");

$state_23 = file_get_contents("http://10.1.10.35:8000/GPIO/23/value");

$state_24 = file_get_contents("http://10.1.10.35:8000/GPIO/24/value");

?>
{
	"pin_22" : <?php print_r($state_22); ?>,
        "pin_23" : <?php print_r($state_23); ?>,
        "pin_24" : <?php print_r($state_24); ?>
}
