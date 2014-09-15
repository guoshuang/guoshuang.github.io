var charts_compare=(function(){

var tb=$('#tb2013-11-28')

tb.on('click','td',function(){
	tb.find('td').css({'background-color':'#fff'})
	var i=$(this).index()-1;
	tb.find('tr').each(function(){
		$(this).find('td:eq('+i+')').css({'background-color':'#cdf'})
	})
})

})()
