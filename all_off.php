<?php

        require_once 'vendor/autoload.php';

        use PiPHP\GPIO\GPIO;
        use PiPHP\GPIO\Pin\PinInterface;

        $gpio = new GPIO();

        $pin_switch = $gpio->getOutputPin(22);
        $pin_switch->setValue(0);

        $pin_switch = $gpio->getOutputPin(23);
        $pin_switch->setValue(0);

        $pin_switch = $gpio->getOutputPin(24);
        $pin_switch->setValue(0);

?>
