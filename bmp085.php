
<?php

$hpa = file_get_contents("http://10.1.10.36:8000/devices/bmp/sensor/pressure/hpa");
$pa = file_get_contents("http://10.1.10.36:8000/devices/bmp/sensor/pressure/pa");

$seaHpa = file_get_contents("http://10.1.10.36:8000/devices/bmp/sensor/pressure/sea/hpa");
$seaPa = file_get_contents("http://10.1.10.36:8000/devices/bmp/sensor/pressure/sea/pa");

$temp_c = file_get_contents("http://10.1.10.36:8000/devices/bmp/sensor/temperature/c");
$temp_f = file_get_contents("http://10.1.10.36:8000/devices/bmp/sensor/temperature/f");

?>
{
        "hpa" : <?php print_r($hpa); ?>,
        "pa" : <?php print_r($pa); ?>,
        "seaHpa" : <?php print_r($seaHpa); ?>,
        "seaPa" : <?php print_r($seaPa); ?>,
        "temperature" : {
        	"C" : <?php print_r($temp_c); ?>,
        	"F" : <?php print_r($temp_f); ?>
        }
}
