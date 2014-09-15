var gsMap=(function(){

//map center latlng
// var position=new soso.maps.LatLng(34.25853304023484,1108.95706219329263);
var position=new soso.maps.LatLng(34.258519,108.957047);

//map info output
// var span_latlng=document.getElementById("sosomap-latlng");
// var span_zoom=document.getElementById("sosomap-zoom");
// var span_pnoid=document.getElementById("sosomap-pnoid");
// var span_pnodesc=document.getElementById("sosomap-desc");

//map
var map = new soso.maps.Map(document.getElementById("sosomap-container"),{
		center: position,
		draggableCursor:'crosshair',
		scrollwheel:false,
		mapTypeControl:false,
		zoom: 14
	})

//街景 init
pano_service = new soso.maps.PanoramaService();

//click map get pano result
soso.maps.event.addListener(map, 'click', function (evt){
    var point = evt.latLng;
    console.log(evt);
    document.getElementById("sosomap-latlng").innerText=evt.latLng;
    // console.log(map)
    // document.getElementById('sosomap-total-info').innerHtml=map);
    document.getElementById("sosomap-zoom").innerText=map.zoom;
    var radius ;
    pano_service.getPano(point, radius, function (result){
        pano.setPano(result.svid);
        console.log(pano);
        document.getElementById("sosomap-pnoid").innerText=result.svid;
        document.getElementById("sosomap-desc").innerText=result.description;
    });
});

//the pano init place at my home :)
var pano = new soso.maps.Panorama(document.getElementById('sosomap-pano'), {
		pano: "10161002120711155941800",
		disableLogo:true,
		disableMove: false,
		scrollwheel:false,
		pov:{
			heading:284.6,//偏航角
			pitch:14.1 //俯仰角
		},
		zoom:1
	});

//pano changed event
soso.maps.event.addListener(pano, 'pano_changed', function (){
	//pano 没有 desc 信息；在 getPano(result)那里！
	document.getElementById("sosomap-latlng2").innerText=pano.position;
	document.getElementById("sosomap-pnoid").innerText=pano.pano;
	document.getElementById("sosomap-zoom2").innerText=pano.zoom;
})

//添加街景覆盖物
var panolabel=new soso.maps.PanoramaLabel({
	altitude:3,//label距离地面的高度，单位m。
	panorama:pano,//场景对象
	// position:position,//标注所在位置。必填。
	position:new soso.maps.LatLng(34.258527860264685, 108.95693970322606),
	content:'guo家大剧院'
});

document.getElementById('place42sao').addEventListener('click', function(){
	clearInterval(timer);
	// pano.setPano('10161002120711155939300');
	pano.setPano('10161003120622115554700');//望庭国际
	pano.setPov({heading:291.4,pitch:4.3})//望庭国际
	// pano.setPano('10161002120711155939300');
	//pano.setPov({heading:220.9,pitch:19.7});
})

document.getElementById('getPanoInfo').addEventListener('click', function(){
	var html='id: '+pano.pano+'<br />{heading:'+pano.pov.heading+',pitch:'+pano.pov.pitch+'}';
	document.getElementById('getPanoInfo-div').innerHTML=html;
})

//ani show 

var heading = pano.pov.heading;

var timer = setInterval(function(){
	if(heading >= 360){
		heading = 0;
	}
	heading -= 0.5;
	pano.setPov({heading : heading});
}, 100);

document.getElementById('stopCircle').addEventListener('click', function(){
	clearInterval(timer);
})


// soso.maps.event.addListener(pano, 'pov_changed', function (){
// 	var pov = pano.getPov();
// 	if(Math.abs(pov.heading - heading) > 1){
// 		clearInterval(timer);
// 	}                    
// })

	return {a:map,b:pano};

})()

///////////////


setTimeout(removeVendor,3000);

function removeVendor(){
	var map=$('#sosomap-container')
	map.find(' > div > div:nth-child(2)').hide();
	map.find(' > div > div:nth-child(3)').hide();
}


