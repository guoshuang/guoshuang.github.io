jQuery(function($){

	$('#slz1').selectize({

	});

	$('#slz2').selectize({
		dropdownParent: 'body',
		maxItems: 3,
		// onChange: function(v){
		// 	console.log(v);
		// }
	}).on('change',function(){
		$('#slz2-input').val($(this).val());
	})

	$('#slz3').selectize({
		valueField: 'id',
    labelField: 'title',
    searchField: 'id',
		options:[
			{id:11,title:'科学家',url:'#1'},
			{id:22,title:'歌唱家',url:'#1'},
			{id:33,title:'前端',url:'#1'},
			{id:44,title:'程序员',url:'#1'}
		],
		create: true
	}).on('change',function(){
		$('#slz3-input').val($(this).val());
	});

	var select4=$('#slz4').selectize({
		dropdownParent: 'body'
	});

	$("#slz4-btn1").on('click',function(){
		select4[0].selectize.setValue(1);
	})
	
	$("#slz4-btn2").on('click',function(){
		select4[0].selectize.setValue(4);
	})

	$('#slz5').selectize({
		delimiter: ',',
		dropdownParent: 'body',
		valueField: 'title',
    searchField: 'title',
    options:[
    	{title:'search'},
    	{title:'home'},
    	{title:'heart'},
    	{title:'film'},
    	{title:'off'},
    	{title:'user'}
    ],
		render:{
			option:function(data){
				return '<div class="option"><i class="icon-'+data.title+'"></i> <span class="title">'+data.title+'</span></div>';
			},
			item:function(data){
				return '<div class="item"><i class="icon-'+data.title+'"></i> '+data.title+'</div>';
			}
		},
		create:function(input){
			return {title:input}
		}
	});

})