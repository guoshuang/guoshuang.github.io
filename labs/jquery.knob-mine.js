jQuery(function($){
/////////////////////

$(".knob").knob({
	change:function(v){
		// console.log('event:change');
	},
	release:function(v){
		// console.log($.data('skin'));
	},
	draw:function(){
		// console.log('event:draw');
	}
})

var knob2=$("#knob2");
knob2.knob({
	min:0,
	max:100,
	fgColor:'#c00',
	inputColor:'rgba(0,0,0,1)',
	lineCap:'round',
	release:function(){
		console.log(this)
	}
})

//knob2 animation

var timer=null;
var i=0;

timer=setInterval(function(){
	if(i<=100){
		knob2.val(i).trigger('change');
		var num=Math.floor(i/25);//轮换4个绿色，最终黑色
		knob2.trigger('configure',{
			fgColor:num<4?gs.getColor('greenPower',num):'#333'
		});
		knob2.css({color:'rgba(66,66,66,'+i/100+')'});
		knob2.val(i+'%');
		i+=1;
	}else{
		clearInterval(timer);
	}
}
,100);

/////////////////////
})