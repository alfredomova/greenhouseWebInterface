<?php
	//exec("gpio read 1", $status);

	// TODO

	$temp = rand(1,100);
	$hum = rand(1,100);
?>
{
	"temperature" : <?php print_r($temp); ?>,
	"humidity" : <?php print_r($hum); ?>
}