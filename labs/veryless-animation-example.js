jQuery(function($){

	var ani=$('#veryless-animation-div');

	$('#veryless-animation-type-list li').on('click',function(){
		ani.css({
			'animation-name':$(this).text()
		});
		$(this).addClass('current').siblings().removeClass('current');
	})

	$('#btn-pause').on('click',function(){
		$(this).toggleClass('icon-pause');
		ani.toggleClass('ani-paused');
	})

	//init
	$('#veryless-animation-type-list li:eq(4)').trigger('click');
})