Array.max = function( array ){
	return Math.max.apply( Math, array );
};

function data2chart(){
	var volWidth=0.8;//列宽80%
	var container=$('#gs-draggable-chart-container');

	try {
  var arr=JSON.parse($('#gs-draggable-chart-data').text());
	}catch(e){
		alert('数据有错误！')
	}
  if(arr){
  	// var num=arr.length;
  	var html='';
  	var w=container.width()/arr.length;
  	var containerHeight=$('#gs-draggable-chart-container').height();
  	var max=Array.max(arr);
  	
  	for(i=0;i<arr.length;i++){
  		var h=arr[i]/max*containerHeight;
      //gs.getColor('greenPower',i%4) -- greenPower 只有4个颜色
  		html+='<div class="d'+i+'" style="position:absolute;background:'+gs.getColor('greenPower',i%4)+';width:'+w*volWidth+'px;left:'+w*i+'px;text-align:center;margin-left:'+w*(1-volWidth)/2+'px;bottom:0;height:'+h+'px">'+arr[i]+'</div><div class="gsHandler" data-index="'+i+'" style="width:'+w*volWidth+'px;left:'+w*i+'px;text-align:center;margin-left:'+w*(1-volWidth)/2+'px;top:'+(containerHeight-h)+'px"></div>';
  	}
  	container.html(html);

  	//draggable
  	container.find('div.gsHandler').draggable({
  			axis:'y',
  			// containment:$('#gs-draggable-chart-container'),
  			// containment:[0,0,0,200],
  			// containment:[container.offset().left,container.offset().top+20,container.offset().left,container.offset().top+container.height()+20],
  			stop:function(e,ui){

  				var d=container.find('.d'+$(this).attr('data-index'));
  				var th=ui.originalPosition.top-ui.position.top+d.height();
  				
  				d.css({
  					height:th+'px'
  				})

  				var v=Math.round(max*th/containerHeight*100)/100;
  				if(v<0){
  					arr[$(this).attr('data-index')]=0;
  				}else{
	  				arr[$(this).attr('data-index')]=v;
	  			}
  				$('#gs-draggable-chart-data').text('['+arr.join(',')+']');
  				data2chart();

  			}
  	})
  }
}
  

jQuery(function($){

$('#gs-draggable-chart-btn').on('click',function(){
	data2chart();
}).trigger('click');

$(window).resize(data2chart);


})