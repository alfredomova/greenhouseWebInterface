/**
* Greenhouse Web Interface.
*/
var config ={};

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

	var tempMode = 'C';

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
				//loadSwitchStates();
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
	}, 15000);
	
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
}

/** retrive actual state of the switches */
function loadSwitchStates(){
	$.ajax({
		url: 'switch_states2.php',
		dataType: 'json',
		success: function(data){

			if(data['pin_' + config.pin_fan] == 0){
				$('#checkFan').bootstrapSwitch('state', false); 
			} else {
				$('#checkFan').bootstrapSwitch('state', true); 
			}

			if(data['pin_' + config.pin_waterPump] == 0){
				$('#checkWaterPump').bootstrapSwitch('state', false); 
			} else {
				$('#checkWaterPump').bootstrapSwitch('state', true); 
			}

			if(data['pin_' + config.pin_lights] == 0){
				$('#checkLight').bootstrapSwitch('state', false); 
			} else {
				$('#checkLight').bootstrapSwitch('state', true); 
			}

		}
	});	
}

function refresh(){
	loadTempHum();
	loadSwitchStates();
}

