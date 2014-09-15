var winresizelog=$('#window_resize_log');

$(window).on('resize',function(){
	var o=winresizelog.find('li:eq(0) strong');
	o.text(parseInt(o.text(),10)+1);
})

$(window).on('debouncedresize',function(){
	var o=winresizelog.find('li:eq(1) strong');
	o.text(parseInt(o.text(),10)+1);
})

$(window).on('throttledresize',function(){
	var o=winresizelog.find('li:eq(2) strong');
	o.text(parseInt(o.text(),10)+1);
})

function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c}

on_resize(function() {
  var o=winresizelog.find('li:eq(3) strong');
	o.text(parseInt(o.text(),10)+1);
});
