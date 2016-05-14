var lat1;
var lon1;
var lat2;
var lon2;

var d;
var r = 6373;

var part1;
var part2;
var part3;

var latdiff;
var londiff;

function convert(deg) {
	var rad = deg * Math.PI/180;
	return rad;
}

self.onmessage = function(e) {
 	var data = e.data;
 	lat1 = convert(data.lat1);
 	lon1 = convert(data.lon1);
 	lat2 = convert(data.lat2);
 	lon2 = convert(data.lon2);
	
	latdiff = lat2 - lat1;
	londiff = lon2 - lon1;

	part1 = Math.pow(Math.sin(latdiff/2),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(londiff/2),2);    
    part2 = Math.sqrt(part1);
    part3 = Math.asin(part2);
    d = 2 * r * part3;
    
    self.postMessage(d);
    self.close();
};


