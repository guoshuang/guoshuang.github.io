jQuery(function($){
///////////

var preview=$('#SpinKit-area');
var list=$('#SpinKit-list');

list.on('click','li',function(){
	// console.log($(this).index())
	var index=$(this).index();
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	preview.removeAttr('class').addClass('active'+(index+1));
	preview.find('li').hide();
	preview.find('li:eq('+index+')').show();
})

list.find('li:eq(0)').trigger('click');

///////////
})