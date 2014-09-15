var sblThemes={
	"flatland":"Flatland",
	"all_hallows_eve":"All Hallow's Eve",
	"amy":"Amy",
	"blackboard":"Blackboard",
	"cobalt":"Cobalt",
	"dawn":"Dawn",
	"eiffel":"Eiffel",
	"espresso_libre":"Espresso Libre",
	"idle":"IDLE",
	"lazy":"LAZY",
	"mac_classic":"Mac Classic",
	"magicwb_amiga":"MagicWB (Amiga)",
	"monokai_bright":"Monokai Bright",
	"monokai":"Monokai",
	"pastelson_dark":"Pastels on Dark",
	"slush_poppies":"Slush & Poppies",
	"solarized_dark":"Solarized (Dark)",
	"solarized_light":"Solarized (Light)",
	"spacecadet":"SpaceCadet",
	"sunburst":"Sunburst",
	"twilight":"Twilight",
	"zenburnesque":"Zenburnesque",
	"iplastic":"iPlastic"
}

jQuery(function($){
//////////

var btnHtml='<ul>';

$.each(sblThemes,function(j,k){
	 btnHtml+='<li data-t="'+j+'">'+k+'</li>'
})

btnHtml+='</ul>';

$('#sublime-themes-css').html(btnHtml);
$('#sublime-themes-css').on('click','li',function(){
	
	$(this).addClass('current').siblings().removeClass('current');	

	var t=$(this).attr('data-t');

	// 文件名中是下划线，ace 会转为 中划线 的 css class。如果中划线 会被 double。
	$('#sublime-themes-preview-div').addClass('ace-'+t.replace(/_/g,'-'));

	$.ajax({
		url:'/labs/sublime-themes/'+t+'.css',
		success:function(d){
			$('#sublime-themes-style-temp').remove();
			$('#sublime-themes-css').after('<style id="sublime-themes-style-temp">'+d+'</style>')
		}
	})
})

$('#sublime-themes-css').find('li:first').trigger('click');

//////////
})
