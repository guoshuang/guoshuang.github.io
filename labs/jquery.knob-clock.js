function num2(n){
	if(n<10){
		n='0'+n;
	}
	return n;
}

jQuery(function($){
/////////////////////

var clock_size=160;
var clock_w=0.6;

$('.knob-clock').each(function(){
	$(this).wrap('<span class="clock-container"></span>');
	var container=$(this).parent();
	var time;
	var v=$(this);
	if($(this).val()!=''){
		time=$(this).val().split(':');
	}else{
		var now=new Date();
		time=[num2(now.getHours()),num2(now.getMinutes())];
		v.val(time.join(':'));
	}
	// console.log(time)

	container.append('<input class="m"><input class="h">');

	var m=container.find('.m');
	var h=container.find('.h');
	
	m.knob({
		thickness:clock_w,
		min:0,
		max:59,
		width:clock_size,
		height:clock_size,
		displayInput:false,
		fgColor:gsColors[0],
		stopper:false,
		release:function(){
			time[1]=num2(this.cv);
			v.val(time.join(':'));
		},
		change:function(){

			time[1]=num2(this.cv);
			v.val(time.join(':'));
		}
	})
	m.val(parseInt(time[1],10)).trigger('change');

	h.knob({
		thickness:(1-clock_w)/clock_w,
		min:0,
		max:23,
		width:clock_size*clock_w,
		height:clock_size*clock_w,
		displayInput:false,
		// cursor:5,
		fgColor:gsColors[1],
		release:function(){
			time[0]=num2(this.cv);
			v.val(time.join(':'))
		},
		change:function(){
			time[0]=num2(this.cv);
			v.val(time.join(':'))
		}
	})
	h.val(parseInt(time[0])).trigger('change');

	// console.log(container.find('div:eq(1)'))
	container.find('div:eq(1)').css({
		'margin-left':clock_size*(1-clock_w)/2+'px',
		'margin-top':clock_size*(1-clock_w)/2+'px'
	})
})

/////////////////////
})