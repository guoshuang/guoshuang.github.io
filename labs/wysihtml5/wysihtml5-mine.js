
//原始无 jquery 依赖的代码
// var editor = new wysihtml5.Editor("wysihtml5-textarea", { 
	
//   toolbar:      "wysihtml5-editor-toolbar", 
//   parserRules:  wysihtml5ParserRules, 
//   stylesheets: ["/labs/normalize.css", "/labs/wysihtml5/editor.css"],
// });

jQuery(function($){

var editor = new wysihtml5.Editor($('#gsEditor-textarea')[0], { 
	
  toolbar:      $('#gsEditor-toolbar')[0], 
  parserRules:  wysihtml5ParserRules, 
  stylesheets: ["/labs/normalize.css", "/labs/wysihtml5/editor.css"],
});

$('#wysihtml5-btn').on('click',function(){
	console.log($('#gsEditor-textarea').val())
	return false;
})

})

