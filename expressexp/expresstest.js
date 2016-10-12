var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require("http");
var https = require("https");
var port = 4538; 
var longitude = 0; 
var latitude = 0; 
var allowCrossDom = function(req, res, next){
 	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
};
app.use(allowCrossDom);


app.get('/data', function (request, response){ 
	request({
    	method:'GET',
    	 //get body from client and 
    	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCJMBoIxon4GcNCuyKV69BiE7pMakxRbm0'
    }), function (result, error){
    		if(result){
    			longtitude = result.geometry.location.lng;
    			latitude = result.geometry.location.lat; 
    		}else{
    			console.error(error);
    		}
      	}
	});

// app.get('/fares', function (request, response){ 
// 	request({
//     	method:'GET',
//     }), function (result, error){
//     	if(result){
//     		longtitude = result.geometry.location.lng;
//     		latitude = result.geometry.location.lat; 
//     	}else{
//     		console.error(error);
//     	}
//     }
// });

// app.post('/', function (request, response){
// })

// app.listen(port, function (){
// 	console.log('listening');
// });