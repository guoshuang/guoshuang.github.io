
$('#stripedAni2').on('mousemove',function(e){
	
	// console.log((e.pageX-$(this).offset().left)/$(this).width()*100+'%')
	var percent=(e.pageX-$(this).offset().left)/$(this).width();
	// console.log(percent);

	//hsl 色相 = 0~360 红  ；120 绿；240 蓝
	var color='hsl('+percent*360+',50%,30%)';

	$(this).css({'background-color':color});

	//改变动画方向
	if(percent<0.4){
		$(this).css({'animation-direction':'normal'});
	}else if(percent>0.4&&percent<0.6){
		$(this).css({'animation-direction':'alternate'});
	}else{
		$(this).css({'animation-direction':'reverse'});
	}
})