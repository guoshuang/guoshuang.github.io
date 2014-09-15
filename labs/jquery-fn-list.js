jQuery(function($){
/////////

var article=$('#div2013-10-30').parents('.post')
var btn=$('#btn-2013-10-30').find('.btn');

// console.log(article.find('pre'))

// article.find('pre').hide();

btn.on('click',function(){
	
	if(btn.text().indexOf('关闭')!=-1){
		// console.log(article.find('pre'))
		article.find('pre').hide();
		// article.find('p').css({display:'inline-block','padding-right':'2em'});
		btn.text('显示源代码');
	}else{
		article.find('pre').show();
		//article.find('p').css({display:'block','padding-right':'auto'});
	}
})

$('strong em').on('click',article,function(){
	$(this).parents('p').next().toggle();
}).css({cursor:'help'})

/////////
})