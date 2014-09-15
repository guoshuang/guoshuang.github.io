jQuery(function(){
	$('.div2013-08-26 h3').click(function(){
		console.log($(this).next())
		var img = $(this).next().find('img');
		img.attr('src',img.attr('data-src'));
	})

	$('.btn2013-08-26').click(function(){
		console.log($(this).parents('.div2013-08-26'))
		p=$(this).parents('.div2013-08-26');
		p.find('img').each(function(){
			img = $(this);
			img.attr('src',img.attr('data-src'));
		})
	})
})