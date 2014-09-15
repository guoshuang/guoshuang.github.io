
jQuery(function($){
/////////////

var template=$('#underscore_template_div');
var resultHtml=$('#underscore_template_html');

//获得模版
var compiled = _.template(_.unescape(template.html()));

$.ajax({
	url:'/labs/guoshuang.json',
	dataType:'json',
	success:function(d){
		
		//获得数据
		var html=compiled(d);

		//render
		resultHtml.html(html)

	}
})

//也许这样可以解决 dom append + behavior 的问题。
resultHtml.on('mouseenter','>ul>li',function(){
	$(this).stop().animate({'padding-left':'10px'},500,'swing');	
}).on('mouseleave','>ul>li',function(){
	$(this).stop().animate({'padding-left':'0'},500,'swing');
})

/////////////
})