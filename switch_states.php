<?php

    exec("gpio read 22", $pin_22);
    exec("gpio read 23", $pin_23);
    exec("gpio read 24", $pin_24);

?>
{
 	"pin_22" : <?php print_r($pin_22[0]);?>,
	"pin_23" : <?php print_r($pin_23[0]);?>,
	"pin_24" : <?php print_r($pin_24[0]);?>
}
