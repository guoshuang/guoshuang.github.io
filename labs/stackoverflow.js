

var sfHtml='';

$('#stackoverflowForm').on('submit',function(){

	var v=$(this).find('input').val()

	$.ajax({
		url:'http://labs.guoshuang.com/stackoverflow.php',
		data:{tag:v},
		dataType:'jsonp',
		cache:true,
		beforeSend:function(){
			$('#stackoverflow-div').html('<p style="color:#c00">正在处理中...</p>');
		},
		success:function(d){
			console.log(d);
			$.each(d.entry,function(j,k){
				var content=k.summary;
				content=content.replace(/<code>/g,'').replace(/<\/code>/g,'').replace(/<blockquote>/g,'<p>').replace(/<\/blockquote>/g,'</p>')
				sfHtml+='<dt><a target="_blank" href="'+k.link['@attributes'].href+'">'+k.title+'</a></dt><dd>'+content+'</dd>'
			})
			$('#stackoverflow-div').html(sfHtml);

		}
	})

	return false;
})



