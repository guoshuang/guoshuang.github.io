jQuery(function($){
/////////////

var dropzone=$('#dropzone');
var datazone=$('#datazone');

var jsonContent='';

dropzone.on('dragover',function(e){
	e=e.originalEvent;
	e.dataTransfer.dropEffect = 'move';
	return false;//否则会被浏览器渲染
})

dropzone.on('dragenter',function(e){
	$(this).addClass('dragging');
}).on('dragleave',function(e){
	$(this).removeClass('dragging');
}).on('drop',function(e){

	//否则会被浏览器渲染
	e=e.originalEvent;
	if (e.preventDefault) e.preventDefault(); 
	if (e.stopPropagation) e.stopPropagation();
	
	$(this).removeClass('dragging');

	var fileList = e.dataTransfer.files;
	
	if(fileList.length==0){
		//datazone.text('外部文件而不是文字！');
	}else{
		$.each(fileList,function(j,k){

			if(k.type.indexOf('text')!=-1){
				datazone.append('<dt>文件名：'+k.name+' 大小：'+k.size+' 类型：'+k.type+' 修改时间：'+moment(k.lastModifiedDate).fromNow()+'</dt>');

				//read file content
				var reader = new FileReader();
 				reader.onloadend = function(e) {
					if (e.target.readyState == FileReader.DONE) {
						var content = reader.result;
						
						datazone.find('dt:eq('+j+')').after('<dd><textarea>'+content+'</textarea></dd>');
						// fileHtml+='<dd>'+content+'</dd>'
					}
				}
		    reader.readAsBinaryString(k);

			}else if(k.type.indexOf('json')!=-1){
				console.log('%c json文件，：）','color:red;');
				
				//try parse json
				try{
					var reader = new FileReader();
 					reader.onloadend = function(e) {
						if (e.target.readyState == FileReader.DONE) {
							var content = reader.result;

							$('#jsonzone').append(content)

							var json=JSON.parse(content);
							
							// $('<textarea></textarea>').text(content).appendTo(datazone);

							datazone.html('<textarea>'+content+'</textarea>')
						}
					}
			    reader.readAsBinaryString(k);					
				}
				catch(e){alert('json文件有问题')}

			} else{
				console.log(k.name+' 不是文本文件！');
			}
		})
	}

})

$('#json-output-btn').on('click',function(){
	var t=$('#jsonzone').val();
	if(t==''){
		alert('还没有内容呢！')
	}else{
		Download.save(t, 'file001.json');
	}
})

/////////////	
})

// Download.save('hello world', 'my_file.txt');

//javascript download as file
var Download = {
    click : function(node) {
        var ev = document.createEvent("MouseEvents");
        ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return node.dispatchEvent(ev);
    },
    encode : function(data) {
            return 'data:application/octet-stream;base64,' + btoa( data );
    },
    link : function(data, name){
        var a = document.createElement('a');
        a.download = name || self.location.pathname.slice(self.location.pathname.lastIndexOf('/')+1);
        a.href = data || self.location.href;
        return a;
    }
};
Download.save = function(data, name){
    this.click(
        this.link(
            this.encode( data ),
            name
        )
    );
};


