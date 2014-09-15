function momentClock(){
	$('#momentClock').css({visibility:"visible"})
	var now=moment();
	var hour = now.hours();
	var minute = now.minutes();
	var second = now.seconds();
	hour=hour>12?hour-12:hour;
	//console.log(hour/12*360)
	$('#momentClock').find('.hour').css({transform:'rotate('+hour/12*360+'deg)'})
	$('#momentClock').find('.minute').css({transform:'rotate('+minute/60*360+'deg)'})
	$('#momentClock').find('.second').css({transform:'rotate('+second/60*360+'deg)'})
	$('#momentClockStr').text(now.format('MMMM DD日 YYYY dddd a h:mm:ss'))
	//clock.
}

//-webkit-transform:rotate(310deg);
setInterval(momentClock,1000);

window.onload = function(){
	$('#time2springday span').text(moment([2014, 1, 31]).fromNow());
}