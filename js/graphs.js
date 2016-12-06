
$(document).ready(function(){

	$.jqplot.config.enablePlugins = true;

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
			
			var plot1 = $.jqplot('chart1', data, {
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
			
			var plot1 = $.jqplot('chart2', data, {
				title:'Humidity',
				axes:{
					xaxis:{
						renderer:$.jqplot.DateAxisRenderer
					}
				}
			});
			
		}
	});	
	
	// ***********************************************************
 
});