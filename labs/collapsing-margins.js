function appendStyle(obj) {
	var k=$('#collapsing-margins-style');
	if(k.length!=0){
		k.remove();
	}else{
	$('<style id="collapsing-margins-style">#collapsing-margins-div h3 {margin-top: 0;}</style>').appendTo($('body'));
	}

	$(obj).toggleClass('btn-danger')
}