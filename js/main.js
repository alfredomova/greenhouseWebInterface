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
	$("#checkOther").bootstrapSwitch();
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
		var state = data ? 0 : 1;
		$.ajax({
			url: 'php/change_state.php',
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
	
	/** Other Switch */
	$('#checkOther').on('switchChange.bootstrapSwitch', function (e, data) {
		chageState(config.pin_other, data);
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
	
	loadGraphs();

	window.setInterval(function(){
		loadGraphs();
	}, 300000);

});

/** retrive temperature & humidity */
function loadTempHum(){
	$.ajax({
		url: 'php/dht22.php',
		dataType: 'json',
		success: function(data){
			var temp  = "";
			var temp_s  = "";
			if(tempMode == 'C'){
				temp = data.temperature.C;
				temp_s = parseFloat(data.temperature.C).toFixed(2) + '°C';
			} else {
				temp = data.temperature.F;
				temp_s = parseFloat(data.temperature.F).toFixed(2) + '°F';
			}
			$('#progressTemp').css('width', temp +'%').attr('aria-valuenow', temp).html(temp_s);
			$('#progressHum').css('width', data.humidity +'%').attr('aria-valuenow', data.humidity).html(parseFloat(data.humidity).toFixed(2) + '%');
		}
	});	
	
	$.ajax({
		url: 'php/bmp085.php',
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
		url: 'php/states.php',
		type: "GET",
		dataType: "json",
		success: function(result){

			var flag_fan = (result['pin_' + config.pin_fan] == 0);
			$('#checkFan').bootstrapSwitch('state', flag_fan); 

			var flag_waterPump = (result['pin_' + config.pin_waterPump] == 0);
			$('#checkWaterPump').bootstrapSwitch('state', flag_waterPump); 

			var flag_light = (result['pin_' + config.pin_lights] == 0);
			$('#checkLight').bootstrapSwitch('state', flag_light); 

			var flag_other = (result['pin_' + config.pin_other] == 0);
			$('#checkOther').bootstrapSwitch('state', flag_other); 
		}
	});

}

/** Generate last 3 months graphs. */
function loadGraphs(){

	$('#chart_temp').html("");
	$('#chart_hum').html("");

	$.ajax({
		url: "php/dht22_history.php",
		dataType: 'json',
       crossDomain: true,
		success: function(raw){
			var data_mongo = raw.rows;
			
			var data = [[]];
			$.each(data_mongo, function(index, item) {
				var ttt = item.date.$date.split('T');
				data[0].push([index, item.temperature]);
			});
			
			var plot1 = $.jqplot('chart_temp', data, {
				title:'Temperature',
				axes:{
					xaxis:{
						renderer:$.jqplot.DateAxisRenderer
					}
				}
			});
			
		}
	});	
	
	// ***********************************************************
	
	$.ajax({
		url: "php/dht22_history.php",
		dataType: 'json',
       crossDomain: true,
		success: function(raw){
			var data_mongo = raw.rows;
			
			var data = [[]];
			$.each(data_mongo, function(index, item) {
				var ttt = item.date.$date.split('T');
				data[0].push([index, item.humidity]);
			});
			
			var plot1 = $.jqplot('chart_hum', data, {
				title:'Humidity',
				axes:{
					xaxis:{
						renderer:$.jqplot.DateAxisRenderer
					}
				}
			});
			
		}
	});	

}

/** update values.*/
function refresh(){
	loadTempHum();
	loadSwitchStates();
	loadGraphs();
}


