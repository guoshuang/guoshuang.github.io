var posID = navigator.geolocation.watchPosition(function(k){
	var odate = new Date(k.timestamp).toLocaleString();
	// console.log(odate);
	var lat = k.coords.latitude;
	var lon = k.coords.longitude;
	// console.log(lat,lon)
	var html = '时间：<strong>'+odate+'</strong> 纬度：<strong>'+lat+'</strong> 经度：<strong>'+lon+'</strong>';
	$('#yourGeoposition').html(html);
	navigator.geolocation.clearWatch(posID);
  posID = null;
}, function(k){console.log(k); }, {enableHighAccuracy : true, timeout : Infinity, maximumAge : 0}
);

