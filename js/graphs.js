
$(document).ready(function(){

$.jqplot.config.enablePlugins = true;

//	$.ajax({
//		url: "http://10.1.10.100:28017/greenhouse/sensor_bmp085/",
//		dataType: 'json',
//       crossDomain: true,
//		success: function(data){
//			console.log(data);
//		}
//	});	
	
	var data_mongo = [
    { "_id" : { "$oid" : "5844e7ff75273511d99c4b09" }, "date" : { "$date" : "2016-12-04T22:07:27.927-0600" }, "pressure" : 755.55, "temperature" : 12.55 } ,
    { "_id" : { "$oid" : "5844e80b75273511e0851cbe" }, "date" : { "$date" : "2016-12-04T22:07:39.056-0600" }, "pressure" : 755.58, "temperature" : 12.57 } ,
    { "_id" : { "$oid" : "5844e89b752735123505394d" }, "date" : { "$date" : "2016-12-04T22:10:03.778-0600" }, "pressure" : 755.58, "temperature" : 12.52 } ,
    { "_id" : { "$oid" : "5844eaf3752735126debec98" }, "date" : { "$date" : "2016-12-04T22:20:03.699-0600" }, "pressure" : 755.52, "temperature" : 12.25 } ,
    { "_id" : { "$oid" : "5844ed4b7527351295b02f6d" }, "date" : { "$date" : "2016-12-04T22:30:03.267-0600" }, "pressure" : 755.58, "temperature" : 12.07 } ,
    { "_id" : { "$oid" : "5844efa375273512f14db630" }, "date" : { "$date" : "2016-12-04T22:40:03.375-0600" }, "pressure" : 755.4400000000001, "temperature" : 12.06 } ,
    { "_id" : { "$oid" : "5844f45375273513453bf849" }, "date" : { "$date" : "2016-12-04T23:00:03.719-0600" }, "pressure" : 755.27, "temperature" : 12.06 } ,
    { "_id" : { "$oid" : "5844f6ac75273513a1ab8393" }, "date" : { "$date" : "2016-12-04T23:10:03.999-0600" }, "pressure" : 755.35, "temperature" : 11.98 } ,
    { "_id" : { "$oid" : "5844fb5b7527351404677422" }, "date" : { "$date" : "2016-12-04T23:30:03.429-0600" }, "pressure" : 755.08, "temperature" : 11.83 } ,
    { "_id" : { "$oid" : "5844fdb375273514603bc1d6" }, "date" : { "$date" : "2016-12-04T23:40:03.447-0600" }, "pressure" : 755.28, "temperature" : 11.8 } ,
    { "_id" : { "$oid" : "5845000b7527351487829988" }, "date" : { "$date" : "2016-12-04T23:50:03.835-0600" }, "pressure" : 755.16, "temperature" : 11.86 } ,
    { "_id" : { "$oid" : "5845026375273514af8d7d54" }, "date" : { "$date" : "2016-12-05T00:00:03.437-0600" }, "pressure" : 755.1, "temperature" : 11.95 } ,
    { "_id" : { "$oid" : "584504bb752735150b2c0bc0" }, "date" : { "$date" : "2016-12-05T00:10:03.608-0600" }, "pressure" : 755.0700000000001, "temperature" : 12.07 } ,
    { "_id" : { "$oid" : "5845071375273515436808ed" }, "date" : { "$date" : "2016-12-05T00:20:03.413-0600" }, "pressure" : 754.89, "temperature" : 12.17 } ,
    { "_id" : { "$oid" : "5845096b75273515734d79eb" }, "date" : { "$date" : "2016-12-05T00:30:03.341-0600" }, "pressure" : 754.78, "temperature" : 12.24 } ,
    { "_id" : { "$oid" : "58450bc275273515d0be4458" }, "date" : { "$date" : "2016-12-05T00:40:02.951-0600" }, "pressure" : 754.7, "temperature" : 12.26 } ,
    { "_id" : { "$oid" : "58450e1b75273515f7e83161" }, "date" : { "$date" : "2016-12-05T00:50:03.881-0600" }, "pressure" : 754.6900000000001, "temperature" : 12.29 } ,
    { "_id" : { "$oid" : "58451073752735161eb84a2b" }, "date" : { "$date" : "2016-12-05T01:00:03.487-0600" }, "pressure" : 754.66, "temperature" : 12.3 } ,
    { "_id" : { "$oid" : "584512cb752735167ce0d130" }, "date" : { "$date" : "2016-12-05T01:10:03.683-0600" }, "pressure" : 754.7, "temperature" : 12.55 } ,
    { "_id" : { "$oid" : "5845152375273516b4c6ba7e" }, "date" : { "$date" : "2016-12-05T01:20:03.472-0600" }, "pressure" : 754.45, "temperature" : 12.74 } ,
    { "_id" : { "$oid" : "5845177b75273516e2f2058c" }, "date" : { "$date" : "2016-12-05T01:30:03.996-0600" }, "pressure" : 754.42, "temperature" : 12.79 } ,
    { "_id" : { "$oid" : "584519d375273517563aadc8" }, "date" : { "$date" : "2016-12-05T01:40:03.997-0600" }, "pressure" : 754.3200000000001, "temperature" : 12.81 } ,
    { "_id" : { "$oid" : "58451c2b752735177e52a18c" }, "date" : { "$date" : "2016-12-05T01:50:03.407-0600" }, "pressure" : 754.3200000000001, "temperature" : 12.72 } ,
    { "_id" : { "$oid" : "58451e8275273517a62939e2" }, "date" : { "$date" : "2016-12-05T02:00:02.937-0600" }, "pressure" : 754.17, "temperature" : 12.55 } ,
    { "_id" : { "$oid" : "584527e375273504b7a57eb2" }, "date" : { "$date" : "2016-12-05T02:40:03.622-0600" }, "pressure" : 754.01, "temperature" : 12.34 } ,
    { "_id" : { "$oid" : "58452a3b75273504e2f1bd1d" }, "date" : { "$date" : "2016-12-05T02:50:03.843-0600" }, "pressure" : 753.97, "temperature" : 12.33 } ,
    { "_id" : { "$oid" : "58452c93752735050968e2fd" }, "date" : { "$date" : "2016-12-05T03:00:03.232-0600" }, "pressure" : 753.92, "temperature" : 12.26 } ,
    { "_id" : { "$oid" : "58452eeb752735056794db88" }, "date" : { "$date" : "2016-12-05T03:10:03.141-0600" }, "pressure" : 754.01, "temperature" : 12.06 } ,
    { "_id" : { "$oid" : "58453143752735059ed9f740" }, "date" : { "$date" : "2016-12-05T03:20:03.721-0600" }, "pressure" : 753.99, "temperature" : 11.74 } ,
    { "_id" : { "$oid" : "5845339b75273505c58540b4" }, "date" : { "$date" : "2016-12-05T03:30:03.161-0600" }, "pressure" : 753.86, "temperature" : 11.57 } ,
    { "_id" : { "$oid" : "584535f37527350621b4e696" }, "date" : { "$date" : "2016-12-05T03:40:03.306-0600" }, "pressure" : 753.89, "temperature" : 11.46 } ,
    { "_id" : { "$oid" : "5845384b752735064986d493" }, "date" : { "$date" : "2016-12-05T03:50:03.667-0600" }, "pressure" : 753.84, "temperature" : 11.38 } ,
    { "_id" : { "$oid" : "58453aa375273506701342f1" }, "date" : { "$date" : "2016-12-05T04:00:03.013-0600" }, "pressure" : 753.73, "temperature" : 11.5 } ,
    { "_id" : { "$oid" : "58453cfb75273506cb06d73e" }, "date" : { "$date" : "2016-12-05T04:10:03.745-0600" }, "pressure" : 753.8200000000001, "temperature" : 11.64 } ,
    { "_id" : { "$oid" : "58453f53752735070247540e" }, "date" : { "$date" : "2016-12-05T04:20:03.301-0600" }, "pressure" : 753.83, "temperature" : 11.69 } ,
    { "_id" : { "$oid" : "584541ab752735072a8d8652" }, "date" : { "$date" : "2016-12-05T04:30:03.683-0600" }, "pressure" : 753.62, "temperature" : 11.5 } ,
    { "_id" : { "$oid" : "584544037527350785c7e139" }, "date" : { "$date" : "2016-12-05T04:40:03.768-0600" }, "pressure" : 753.65, "temperature" : 11.34 } ,
    { "_id" : { "$oid" : "5845465b75273507acc62d82" }, "date" : { "$date" : "2016-12-05T04:50:03.153-0600" }, "pressure" : 753.65, "temperature" : 11.26 } ,
    { "_id" : { "$oid" : "584548b375273507d3b640ab" }, "date" : { "$date" : "2016-12-05T05:00:03.544-0600" }, "pressure" : 753.5700000000001, "temperature" : 11.23 } ,
    { "_id" : { "$oid" : "58454b0b752735082e0d2274" }, "date" : { "$date" : "2016-12-05T05:10:03.313-0600" }, "pressure" : 753.6900000000001, "temperature" : 11.19 } ,
    { "_id" : { "$oid" : "58454d62752735086613c234" }, "date" : { "$date" : "2016-12-05T05:20:02.964-0600" }, "pressure" : 753.72, "temperature" : 11.19 } ,
    { "_id" : { "$oid" : "58454fbb752735088d92bb3d" }, "date" : { "$date" : "2016-12-05T05:30:03.305-0600" }, "pressure" : 753.8200000000001, "temperature" : 11.18 } ,
    { "_id" : { "$oid" : "5845521375273508e9323f36" }, "date" : { "$date" : "2016-12-05T05:40:03.437-0600" }, "pressure" : 753.9, "temperature" : 11.12 } ,
    { "_id" : { "$oid" : "5845546b75273509108bd753" }, "date" : { "$date" : "2016-12-05T05:50:03.817-0600" }, "pressure" : 753.97, "temperature" : 11.2 } ,
    { "_id" : { "$oid" : "584556c375273509381cad00" }, "date" : { "$date" : "2016-12-05T06:00:03.234-0600" }, "pressure" : 753.99, "temperature" : 11.2 } ,
    { "_id" : { "$oid" : "5845591b75273509931bf054" }, "date" : { "$date" : "2016-12-05T06:10:03.117-0600" }, "pressure" : 753.9400000000001, "temperature" : 11.26 } ,
    { "_id" : { "$oid" : "58455b7375273509ca714a90" }, "date" : { "$date" : "2016-12-05T06:20:03.822-0600" }, "pressure" : 753.9, "temperature" : 11.22 } ,
    { "_id" : { "$oid" : "58455dcb75273509f1c5f7f8" }, "date" : { "$date" : "2016-12-05T06:30:03.437-0600" }, "pressure" : 754.01, "temperature" : 11.24 } ,
    { "_id" : { "$oid" : "584560237527350a4d2a7683" }, "date" : { "$date" : "2016-12-05T06:40:03.307-0600" }, "pressure" : 754.22, "temperature" : 11.28 } ,
    { "_id" : { "$oid" : "5845627b7527350a749d4a7b" }, "date" : { "$date" : "2016-12-05T06:50:03.755-0600" }, "pressure" : 754.27, "temperature" : 11.26 } ,
    { "_id" : { "$oid" : "584564d37527350a9b967ec0" }, "date" : { "$date" : "2016-12-05T07:00:03.153-0600" }, "pressure" : 754.34, "temperature" : 11.33 } ,
    { "_id" : { "$oid" : "5845672a7527350af79baa77" }, "date" : { "$date" : "2016-12-05T07:10:02.916-0600" }, "pressure" : 754.41, "temperature" : 11.4 } ,
    { "_id" : { "$oid" : "584569837527350b2f45966c" }, "date" : { "$date" : "2016-12-05T07:20:03.494-0600" }, "pressure" : 754.4299999999999, "temperature" : 11.57 } ,
    { "_id" : { "$oid" : "58456bda7527350b5626bdd6" }, "date" : { "$date" : "2016-12-05T07:30:02.925-0600" }, "pressure" : 754.4299999999999, "temperature" : 11.88 } ,
    { "_id" : { "$oid" : "58456e337527350bb230f79c" }, "date" : { "$date" : "2016-12-05T07:40:03.874-0600" }, "pressure" : 754.49, "temperature" : 12.53 }
  ];
	
	// ***********************************************************
	
	var getPressure = function() {
		var data = [[]];
		$.each(data_mongo, function(index, item) {
			data[0].push([index, item.pressure]);
		});
		return data;
	};
	
	var plot2 = $.jqplot('chart2',[],{
		title: 'Pressure',
		dataRenderer: getPressure
	});
	
	// ***********************************************************
	
	var getTemperature = function() {
		var data = [[]];
		$.each(data_mongo, function(index, item) {
			var ttt = item.date.$date.split('T');
			data[0].push([index, item.temperature]);
		});
		return data;
	};
	
	var plot1 = $.jqplot('chart1', getTemperature(), {
        title:'Temperature',
        axes:{
            xaxis:{
				renderer:$.jqplot.DateAxisRenderer
            }
        }
    });
 
});