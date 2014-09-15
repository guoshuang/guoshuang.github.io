/*for fun; webkit only by davidguoshuang at gmail.com*/
var pieColorArr=['#b32018','#cd661b','#e5b539','#477f40','#01a2b4','#1b3595','#7f3e98','#e73d96','#572500'];

$(function(){

$('.gsPie').each(function(){
////////////

var total=0;
$(this).find('li').each(function(j,k){
	total+=parseInt($(k).attr('data-pie'),10);
	$(k).attr('data-textcontent',$(k).text());
	$(k).empty();	
})

var arcStart=0;

$(this).find('li').each(function(j,k){
	var thisArc=$(k).attr('data-pie')/total*360;

	if(thisArc<180){//大于180 需要拼接一下
		$(k).wrapInner('<div class="pie"></div>');
		$(k).css({
			'transform':'rotate('+arcStart+'deg)'
		});
		$(k).find('.pie').css({
			'background-color': pieColorArr[j],
			'transform':'rotate('+(thisArc-90)+'deg)'
		});
		arcStart+=thisArc;
	}else{
		$(k).wrapInner('<div class="pie"></div><div></div>');
		$(k).css({
			'transform':'rotate('+arcStart+'deg)',
			'clip':'auto'
		});

		$(k).find('div:eq(0)').css({
			'background-color': pieColorArr[j],
			'transform':'rotate('+(90)+'deg)'
		});
		$(k).find('div:eq(1)').css({
			'background-color': pieColorArr[j],
			//'background-color': 'green',
			'transform':'rotate('+(thisArc-90)+'deg)'
		});
		arcStart+=thisArc;
	}


})

	if($(this).attr('data-donut')){
		var s=$(this).attr('data-donut')*200;
		//console.log(-(s/2)+'px')
		$('<div class="pie_donut"></div>').appendTo($(this)).css({
			'width':s+'px',
			'height':s+'px',
			'margin-left':-(s/2)+'px',
			'margin-top':-(s/2)+'px'
		});
	}

	if($(this).attr('data-piesize')){
		var s=$(this).attr('data-piesize');
		$(this).css({
			'transform':'scale('+s+','+s+')'
		})
	}

	// if($(this).attr('data-pielabel')=='true'){
	// 	var gspie=$(this);
	// 	var arcStart=0;
	// 	$(this).find('li').each(function(j,k){
	// 		thisArc=$(k).attr('data-pie')/total*360;
	// 		arcStart+=thisArc;
	// 		//console.log(thisArc)
	// 		$('<div class="pielabel"></div>').appendTo(gspie).css({
	// 			'background-color':'green',
	// 			'transform':'rotate('+(arcStart-thisArc/2)+'deg)'
	// 		});
	// 	})
	// 	// gspie.find('.pielabel').each(function(j,k){
	// 	// 	console.log($(k).position().left)
	// 	// })
	// }

	if($(this).attr('data-pielabel')=='true'){
		var gspie=$(this);
		gspie.append('<div class="label"></div>');
		$label=gspie.find('.label');
		gspie.find('li').each(function(j,k){
			$label.append('<label><i style="background-color:'+pieColorArr[j]+'"></i>'+$(k).attr('data-textcontent')+'</label>')
		})
	}

/////////////
})


})