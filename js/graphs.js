
$(document).ready(function(){

$.jqplot.config.enablePlugins = true;

	$.ajax({
		url: "php/bmp085_history.php",
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
	
/**	var getPressure = function() {
		var data = [[]];
		$.each(data_mongo, function(index, item) {
			data[0].push([index, item.pressure]);
		});
		return data;
	};
	
	var plot2 = $.jqplot('chart2',[],{
		title: 'Pressure',
		dataRenderer: getPressure
	});*/
	
	// ***********************************************************
 
});