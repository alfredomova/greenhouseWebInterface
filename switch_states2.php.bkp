<?php

	require_once 'vendor/autoload.php';

        use PiPHP\GPIO\GPIO;
        use PiPHP\GPIO\Pin\PinInterface;

        $gpio = new GPIO();

        $pin_22 = $gpio->getOutputPin(22);
	$value_22 = $pin_22->getValue();

        $pin_23 = $gpio->getOutputPin(23);
        $value_23 = $pin_23->getValue();

	$pin_24 = $gpio->getOutputPin(24);
        $value_24 = $pin_24->getValue();
?>
{
 	"pin_22" : <?php print_r($value_22); ?>,
	"pin_23" : <?php print_r($value_23); ?>,
	"pin_24" : <?php print_r($value_24); ?>
}
