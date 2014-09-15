var editor = ace.edit("ace-editor");

editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/javascript");

var editor_css = ace.edit("ace-editor-css");

editor_css.setTheme("ace/theme/twilight");
editor_css.getSession().setMode("ace/mode/css");

var themes=['ambiance','chaos','chrome','clouds','clouds_midnight','cobalt','crimson_editor','dawn','dreamweaver','eclipse','github','idle_fingers','kr','merbivore','merbivore_soft','mono_industrial','monokai','pastel_on_dark','solarized_dark','solarized_light','terminal','textmate','tomorrow','tomorrow_night','tomorrow_night_blue','tomorrow_night_bright','tomorrow_night_eighties','twilight','vibrant_ink','xcode'];

var themesHtml='';

$.each(themes,function(j,k){
	themesHtml+='<li>'+k+'</li>';
})

$('#ace-themes-selector').append('<ul>'+themesHtml+'</ul>');

$('#ace-themes-selector').on('click','li',function(){
	$(this).addClass('current').siblings().removeClass('current');
	editor.setTheme("ace/theme/"+$(this).text());
	editor_css.setTheme("ace/theme/"+$(this).text());
})

//grammars 

var grammars=['abap','actionscript','ada','asciidoc','assembly_x86','autohotkey','batchfile','c9search','c_cpp','clojure','cobol','coffee','coldfusion','csharp','css','curly','d','dart','diff','django','dot','ejs','erlang','forth','ftl','glsl','golang','groovy','haml','handlebars','haskell','haxe','html','html_completions','html_ruby','ini','jack','jade','java','javascript','json','jsoniq','jsp','jsx','julia','latex','less','liquid','lisp','livescript','logiql','lsl','lua','luapage','lucene','makefile','markdown','matlab','mushcode','mushcode_high_rules','mysql','nix','objectivec','ocaml','pascal','perl','pgsql','php','plain_text','powershell','prolog','properties','protobuf','python','r','rdoc','rhtml','ruby','rust','sass','scad','scala','scheme','scss','sh','sjs','snippets','soy_template','space','sql','stylus','svg','tcl','tex','text','textile','toml','twig','typescript','vbscript','velocity','verilog','vhdl','xml','xquery','yaml'];

var editor_diy = ace.edit("ace-editor-diy");

editor_diy.setTheme("ace/theme/twilight");
editor_diy.getSession().setMode("ace/mode/less");

var grammarsArr=[];
$.each(grammars,function(j,k){
	grammarsArr.push({id:j,text:k})
})

jQuery(function($){
	$('#select2-2013-11-24').select2({
		placeholder: "切换语法文件",
		data:grammarsArr
	}).on('change',function(d){
		var grammar=$('#select2-2013-11-24').select2('data').text;
		editor_diy.getSession().setMode("ace/mode/"+grammar);
	});
})




