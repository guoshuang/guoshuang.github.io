jQuery(function($){
////////

var html='';
for(i=0;i<12;i++){
	html+='<div></div>';
}

$('.gsAjaxIndi-2').wrapInner(html);

$('#gsAjaxIndi-2-btn').on('click',function(){
	$(this).toggleClass('icon-pause');
	$('.gsAjaxIndi-2,.gsAjaxIndi-3').toggleClass('paused');
})

////////	
})