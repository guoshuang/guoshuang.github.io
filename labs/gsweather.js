
var geoAPI='http://api.wunderground.com/api/9798383f44b1bc14/geolookup/q/autoip.json';
var  html='';

var ajax_result1,ajax_result2;

$.ajax({
	url:geoAPI,
	dataType:'jsonp',
	cache:true,
	success:function(d){
		ajax_result1=d;
		var loc=d.location;
		html+='<p>地点：'+loc.country_name+' '+loc.city+' <a href="'+loc.wuiurl+'">详细信息</a></p>';
		html+='<p>经度：'+loc.lon+' 维度：'+loc.lat+'</p>';
		var weatherAPI='http://api.wunderground.com/api/9798383f44b1bc14/forecast/lang:CN/q/'+loc.country_name+'/'+loc.city+'.json';
		
		$.ajax({
			url:weatherAPI,
			dataType:'jsonp',
			cache:true,
			success:function(k){
				ajax_result2=k;
				var wea=k.forecast.txt_forecast.forecastday;
				html+='<ul>';
				$.each(wea,function(n,m){
					html+='<li><div class="i"><img src="'+m.icon_url+'"></div><div class="t">'+m.title+'</div><div class="w">'+m.fcttext_metric.replace('C.','&#8451;')+'</div></li>'
				});
				html+='</ul>';

				$('#gsWeather').html(html);

				$('#gs-weather-info').after('<p>第一次：</p><div class="code">'+JSON.stringify(ajax_result1,null,2)+'</div><p>第二次：</p><div class="code">'+JSON.stringify(ajax_result2,null,2)+'</div>')
				//////
				
				
			}
		})

		//first ajax
	}
})


