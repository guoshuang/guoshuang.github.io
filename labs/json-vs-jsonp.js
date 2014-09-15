$.ajax({
	url:'/labs/json-vs-jsonp.json',
	dataType:'json',
	success:function(d){
		$('#json-vs-jsonp-log1').text(JSON.stringify(d));
	}
})

function jsonp_func(d){
	$('#json-vs-jsonp-log2').text(JSON.stringify(d));
}