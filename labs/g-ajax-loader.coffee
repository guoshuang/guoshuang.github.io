root = exports ? this
root.initialAjaxLoader = ->
	ballsDefault = 6;###默认球个数###
	ballsTime = 6;###默认转一圈时间###
	ballsColor = '#333';

	$('.gAjaxLoader').each (j,k)->

		$(this).empty();

		###获得参数###
		balls =$.trim($(k).attr('data-balls'));
		balls = if balls=='' then ballsDefault else balls

		loopTime =$.trim($(k).attr('data-time'));
		loopTime = if loopTime=='' then ballsTime else loopTime

		ballColor =$.trim($(k).attr('data-color'));
		ballColor = if ballColor=='' then ballsColor else ballColor

		divs= '';
		for i in [1..balls]
			divs+='<div></div>';
		
		$(k).append(divs);

		$(k).find('div').each (n,m)->
			$(m).css({
				'background-color':ballColor,
				'animation':'r360 '+loopTime+'s '+(loopTime/balls)*n+'s infinite linear'
				})

initialAjaxLoader()