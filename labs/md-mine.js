
$(window).load(function(){
	
	$('#html2md_result').val(md($('body').html()));

})

jQuery(function(){
//////////

var container_md=$('#md2html_md');
var container_html=$('#md2html_html');
var container_result=$('#md2html_result');

var converter = new Showdown.converter();

container_md.on('keyup',function(){
	var result=converter.makeHtml($(this).val());
	container_html.val(result);
	container_result.html(result);
})

container_html.on('keyup',function(){
	var markdown=md($(this).val())
	container_md.val(markdown);
	container_result.html($(this).val());
})

container_md.trigger('keyup');

//////////	
})

// (function(){
//页面没有加载完，所以md不完整
//  var body=document.getElementsByTagName('body')[0];
//  var aaa=md(body.innerHTML)

//  document.getElementById('html2md_result').value=aaa;
 
// }())