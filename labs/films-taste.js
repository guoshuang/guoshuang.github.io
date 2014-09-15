
jQuery(function(){

var $form=$('#filmTasteForm');
var btn_submit=$('#btn_submit');
var btn_suggested=$('#btn_suggested');
var films_result=$('#films-result');
var filmsInputs=$('#filmsInputs');
// var ajaxurl='http://192.168.1.202/test2/';
var ajaxurl='http://labs.guoshuang.com/films/';

//add more film input field
filmsInputs.find('.addMore').on('click',function(){
	$(this).before('<li><div class="tipsDiv"><ul></ul></div><input autocomplete="off" /></li>');
})

//choose tips item
filmsInputs.on('click','.tipsDiv li',function(){
	var div=$(this).parent().parent();
	var input=div.parent().find('input');
	input.val($(this).text());
	div.hide();
	return false;
})

//hide tipsDiv
$(document).on('click',function(){
	$('.tipsDiv').hide();
})

//auto complete
filmsInputs.on('keyup','input',function(){
	var input=$(this);
	if($.trim(input.val()).length<1){return false;}
	$.ajax({
	url:ajaxurl+'movietips.php',
		async:false,
		data:{
			moviename:$(this).val()
		},
		dataType:'jsonp',
		beforeSend:function(){
			var div=input.parents('li').find('.tipsDiv');
			div.find('li').remove();
			div.hide();
		},
		success:function(d){
			// console.log(d)
			if(d.str!=''){
				var tipArr=d.str.split(',');
				console.log(tipArr);
				var tipDiv=input.parent().find('.tipsDiv');
				console.log(tipDiv)
				var html='';
				$.each(tipArr,function(j,k){
					html+='<li>'+k+'</li>'
				})
				tipDiv.find('>ul').html(html);
				tipDiv.show();

			}
		}
	})


	///////
})

//submit and search films!-------------------------------------------------------------------

btn_submit.on('click',function(){
//click btn start----

//film query arr 
var phpquery=[];
filmsInputs.find('input').each(function(j,k){
	phpquery.push(''+$(k).val());
})

console.log('我提交的电影',phpquery);

$.ajax({
	url:ajaxurl+'add.php',
	async:false,
	data:{
		username:$form.find('[name=username]').val(),
		'film[]':phpquery
	},
	dataType:'jsonp',
	beforeSend:function(){
		films_result.html('<p id="loading"><i class="icon icon-spin" style="width: 32px;height: 32px;display:inline-block;"></i> 处理中，稍后！</p>');
	},
	complete:function(){
		$('#loading').remove();
	},
	success:function(d){

		console.log('注册用户并提交电影：',d);

		if(d.success=="true"){
			films_result.append('<p>'+d.info+'</p>');
		}
		$('#films-result,#films-result-h3').show();
	}
})

//click btn end----
})

btn_suggested.on('click',function(){


$.ajax({
	url:ajaxurl+'recommend.php',
	data:{username:$form.find('[name=username]').val()},
	dataType:'jsonp',
	beforeSend:function(){
		films_result.html('<p id="loading"><i class="icon icon-spin" style="width: 32px;height: 32px;display:inline-block;"></i> 处理中，稍后！</p>');
	},
	complete:function(){
		$('#loading').remove();
	},
	success:function(d){
		console.log('查询推荐：',d);
		if(d.success=="false"){
			films_result.text(d.info);
		}else{
			var html='<dl>';
			$.each(d.items,function(j,k){
				html+='<dt>'+k.name+'</dt><dd> 推荐次数：'+k.count+'</dd>'
			})
			html+='</dl><div class="clearfix"></div>';
			films_result.append(html);
		}
		$('#films-result,#films-result-h3').show();
	}
})

})



var films_list=$('#films-list');

$('#viewAllData-btn').on('click',function(){
	$.ajax({
		url:ajaxurl+'list.php',
		dataType:"jsonp",
		success:function(d){
			var html='<ul>';
			$.each(d.items,function(j,k){
				html+='<li data-id="'+k.id+'">'+k.name+' 喜欢 '+k.film+'</li>'
			});
			html+='<ul>';
			films_list.append(html);
		}
	})
 })

///////////////

})