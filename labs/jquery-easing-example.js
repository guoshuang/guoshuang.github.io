var EASING= ['linear','easeOutQuad','easeInQuad','easeOutQuad','easeInOutQuad','easeInCubic','easeOutCubic','easeInOutCubic','easeInQuart','easeOutQuart','easeInOutQuart','easeInQuint','easeOutQuint','easeInOutQuint','easeInSine','easeOutSine','easeInOutSine','easeInExpo','easeOutExpo','easeInOutExpo','easeInCirc','easeOutCirc','easeInOutCirc','easeInElastic','easeOutElastic','easeInOutElastic','easeInBack','easeOutBack','easeInOutBack','easeInBounce','easeOutBounce','easeInOutBounce'];


var jqw;
var aniTime = 3000;

function boucing(obj,easing){
	// obj=$('.ball');
	var v;
	if(parseInt(obj.css('margin-left'))>=jqw){
		v = 0;
	}else {
		v = jqw + 'px';
	}
	obj.stop().animate({'margin-left':v},aniTime,easing,function(){
		boucing(obj,easing);
	})
}



jQuery(function($){

jqw=$('#jquery-easing-example-divs').width()-30;

$.each(EASING,function(j,k){
	var ehtml='<div class="jquery-easing-example-div"><h3>'+k+'</h3><div class="ball" style="background:rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')"></div></div>';
	$('#jquery-easing-example-divs').append(ehtml);
	// boucing($('#jquery-easing-example-divs').find('.ball:last'),k);
})

$('#jquery-easing-example-divs .ball').each(function(j,k){
	boucing($(k),EASING[j]);console.log(EASING[j])
})

})