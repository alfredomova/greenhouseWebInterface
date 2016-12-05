<?php

	require_once 'vendor/autoload.php';

	use PiPHP\GPIO\GPIO;
	use PiPHP\GPIO\Pin\PinInterface;

	if (PHP_SAPI === 'cli') {
		$pin = $argv[1];
		$state = $argv[2];
	} else {
		$pin = $_GET['pin'];
		$state = $_GET['state'];
	}

	$gpio = new GPIO();

	$pin_switch = $gpio->getOutputPin((int)$pin);
	$pin_switch->setValue((int)$state);

	$current_state = $pin_switch->getValue();

?>
{
	"pin" : <?php print_r($pin); ?>,
	"state" : <?php print_r($current_state); ?>,
	"result" : "ok"
}
