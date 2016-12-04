/**
* Greenhouse Web Interface.
*/
var config ={};
var tempMode = 'C';

$.getJSON("config.json", function(json) {
	config = json; 
});

/** wait for fully loaded */
$( document ).ready(function() {

	/** bootstrap switch */
	$("#checkFan").bootstrapSwitch();
	$("#checkWaterPump").bootstrapSwitch();
	$("#checkLight").bootstrapSwitch();
	$("#tempMode").bootstrapSwitch();
	
	/** Temperature Mode */
	$('#tempMode').on('switchChange.bootstrapSwitch', function (e, data) {
		if(data){
			tempMode = "C";
		} else {
			tempMode = "F";
		}
		loadTempHum();
	});

	function chageState(pin, data){
		var state = data ? 1 : 0;
		$.ajax({
			url: 'change_switch_state.php',
			data : {
				"pin" : pin,
				"state": state
			},
			success: function(result){
				if(result.result == 'fail'){
					$("#msgDiv").show().html("Fail to change switch's state.").delay(5000).fadeOut('slow');
				}
				// loadSwitchStates();
			}
		});
	}

	/** Water Pump Switch */
	$('#checkWaterPump').on('switchChange.bootstrapSwitch', function (e, data) {
		chageState(config.pin_waterPump, data);
	});

	/** Lights Switch */
	$('#checkLight').on('switchChange.bootstrapSwitch', function (e, data) {
		chageState(config.pin_lights, data);
	});

	/** Fan Switch */
	$('#checkFan').on('switchChange.bootstrapSwitch', function (e, data) {
		chageState(config.pin_fan, data);
	});

	/** Cargar y Actualizar cada 5 seg. Temperatura y Humedad */
	$(function(){
		loadTempHum();
		loadSwitchStates();
	});

	window.setInterval(function(){
		loadTempHum();
		loadSwitchStates();
	}, 5000);
	
});

/** retrive temperature & humidity */
function loadTempHum(){
	$.ajax({
		url: 'temp_hum.php',
		dataType: 'json',
		success: function(data){
			var temp  = "";
			if(tempMode == 'C'){
				temp = data.temperature + '°C';
			} else {
				temp = (((data.temperature * 9 ) / 5) + 32) + '°F';
			}
			$('#progressTemp').css('width', data.temperature +'%').attr('aria-valuenow', data.temperature).html(temp);
			$('#progressHum').css('width', data.humidity +'%').attr('aria-valuenow', data.humidity).html(data.humidity + '%');
		}
	});	
	
	$.ajax({
		url: 'bmp085.php',
		dataType: 'json',
		success: function(data){
			var temp  = 0;
			var temp_s  = "";
			if(tempMode == 'C'){
				temp = data.temperature.C;
				temp_s = data.temperature.C + '°C';
			} else {
				temp = data.temperature.F;
				temp_s = data.temperature.F + '°F';
			}
			$('#BMP085_progressTemp').css('width', temp +'%').attr('aria-valuenow', temp).html(temp_s);
			$('#BMP085_pressure').html(data.hpa + " hPa<br/>" + data.seaHpa + " hPa @ Sea level");
		}
	});	
	
}

/** retrive actual state of the switches */
function loadSwitchStates(){

	$.ajax({
		url: 'states.php',
		type: "GET",
		dataType: "json",
		success: function(result){

			var flag_fan = (result['pin_' + config.pin_fan] == 1);
			$('#checkFan').bootstrapSwitch('state', flag_fan); 


			var flag_waterPump = (result['pin_' + config.pin_waterPump] == 1);
			$('#checkWaterPump').bootstrapSwitch('state', flag_waterPump); 


			var flag_light = (result['pin_' + config.pin_lights] == 1);
			$('#checkLight').bootstrapSwitch('state', flag_light); 

		}
	});

}

/** update values.*/
function refresh(){
	loadTempHum();
	loadSwitchStates();
}
