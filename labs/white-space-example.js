jQuery(function($){
/////////////

var whitespace=$('#example-white-space');
var wordwrap=$('#example-word-wrap');
var wordbreak=$('#example-word-break');
var div=$('#white-space-example-div');

whitespace.on('click','li',function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	div.css({'white-space':$(this).text()})
})

wordwrap.on('click','li',function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	div.css({'word-wrap':$(this).text()})
})

wordbreak.on('click','li',function(){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	div.css({'word-break':$(this).text()})
})

/////////////	
})