//yahoo weather chinese
var yahoo_code_cn= {
	"c0":"龙卷风",
	"c1":"热带风暴",
	"c2":"飓风",
	"c3":"强雷暴",
	"c4":"雷雨",
	"c5":"混合雨和雪",
	"c6":"混合雨和雨夹雪",
	"c7":"混合的雨雪冰冻",
	"c8":"冻毛毛雨",
	"c9":"毛毛雨",
	"c10":"冰雨",
	"c11":"阵雨",
	"c12":"阵雨",
	"c13":"雪阵",
	"c14":"小雪阵雨",
	"c15":"吹雪",
	"c16":"雪",
	"c17":"冰雹",
	"c18":"雨夹雪",
	"c19":"尘",
	"c20":"雾​​",
	"c21":"阴霾",
	"c22":"黑烟",
	"c23":"风起云涌",
	"c24":"刮风",
	"c25":"冷",
	"c26":"多云",
	"c27":"多云（夜）",
	"c28":"阴天（日）",
	"c29":"多云（夜）",
	"c30":"多云（天）",
	"c31":"清（夜）",
	"c32":"阳光灿烂",
	"c33":"公平（夜）",
	"c34":"公平（天）",
	"c35":"混合雨和冰雹",
	"c36":"热",
	"c37":"孤立的雷暴",
	"c38":"散雷雨",
	"c39":"散雷雨",
	"c40":"零星阵雨",
	"c41":"大雪",
	"c42":"零星阵雪",
	"c43":"大雪",
	"c44":"多云",
	"c45":"雷阵雨",
	"c46":"阵雪",
	"c47":"隔离雷阵雨",
	"c3200":"不可用"
};

jQuery(function($){
/////

//查询编号
$('#yahoo-weoid-btn').on('click',function(){

	var query=encodeURIComponent('select * from geo.places where text="'+$('#yahoo-weoid').val()+'"');
	url='http://query.yahooapis.com/v1/public/yql?q='+query+'&format=json';
	$.ajax({
		url:url,
		dataType:'json',
		success:function(d){
			var html='<table>';
			$.each(d.query.results.place,function(j,k){
				console.log(j,k)
				var a1='',a2='',a3='';
				if(k.admin1!=null){a1=k.admin1.content;}
				if(k.admin2!=null){a2=k.admin2.content;}
				if(k.admin3!=null){a3=k.admin3.content;}
				html+='<tr><td>'+k.country.content+'</td><td>'+a1+'</td><td>'+a2+'</td><td>'+a3+'</td><td>'+k.name+'</td><td style="color:#c00;">'+k.woeid+'</td></tr>';
			})
			html+='</table>';
			$('#yahoo-weoid-result').html(html);
		}
	})

})

//返回编号
$('#yahoo-weoid-result').on('click','tr',function(){
	$(this).addClass('current').siblings().removeClass('current');
	$('#yahoo-weather').val($(this).find('td:last').text());
})

//返回weather
$('#yahoo-weather-btn').on('click',function(){
	$.ajax({
	url:'http://www.tcstv.com/weather.yahoo.php',
	data:{w:'12713912'},//西安
	dataType:'text',
	success:function(d){
		d=$.parseXML(d);
		var forecast=$(d).find('forecast');
		var html='';
		html+='<ul id="yahoo-weather-div">';
		html+='<li class="city">地点：'+$(d).find('location').attr('city')+'</li>';
		html+='<li class="date">发布时间：'+moment($(d).find('lastBuildDate').text()).format('YYYY-MM-DD HH:mm')+'</li>';
		html+='<li class="visibility">能见度：'+$(d).find('atmosphere').attr('visibility')+$(d).find('units').attr('distance')+'</li>';
		html+='<li class="geo">经纬度：'+$(d).find('long').text()+' '+$(d).find('lat').text()+'</li>';
		$.each(forecast,function(j,k){
			var odate=moment($(k).attr('date')).format('M月D日');
			var low=$(k).attr('low');
			var high=$(k).attr('high');
			var t=yahoo_code_cn['c'+$(k).attr('code')]
			html+='<li>'+odate+' '+low+'&#8451; ~ '+high+'&#8451; '+t+'</li>';
		})
		html+='</ul>';
		alert(html)
		$('#yahoo-weather-result').html(html);
	}
})

})

/////
})

