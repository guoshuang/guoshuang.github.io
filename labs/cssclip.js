function doCssClip(e,ui){
	var w=$(this).width();
		var h=$(this).height();
		var p=ui.position;
		var t=p.top;
		var r=p.left+w;
		var b=p.top+h;
		var l=p.left;
		//console.log(t,r,b,l,$('#cssClipDiv img'))
		//console.log($('#cssClipDiv img'))
		$('#cssClipDiv img').css({clip:'rect('+t+'px,'+r+'px,'+b+'px,'+l+'px)'})
		//clip:rect(0,100px,100px,0);
		var obj= $('#cssClipData');
		obj.find('strong:eq(0)').text(t+'px');
		obj.find('strong:eq(1)').text(r+'px');
		obj.find('strong:eq(2)').text(b+'px');
		obj.find('strong:eq(3)').text(l+'px');
}

$(function(){
	$('#cssClipDiv-handler').resizable({
		containment:'parent',
		handles: 'n,s,e,w',
		resize:doCssClip
	});
	$('#cssClipDiv-handler').draggable({
		containment:'parent',
		drag:doCssClip
	})
})