jQuery(function($){
///////////////////
	
	var container=$('#gs-4d-chart-container');
	var c=container.find('ul.countries');
	var infoHtml='';

	c.find('li').each(function(j,k){
		////
		var life=parseInt($(k).attr('data-life'));
		var income=parseInt($(k).attr('data-income'));
		var population=parseInt($(k).attr('data-population'));

		var size,bkcolor;

		//颜色、大小
		if(population>2000000000){
			size='50px';margin='-25px 0 -25px 0';
			bkcolor='#c00';
		}else if (population>30000000){
			size='40px';margin='-20px 0 -20px 0';
			bkcolor='#c90';
		}else {
			size='30px';margin='-15px 0 -15px 0';
			bkcolor='#39c';
		}
		
		//位置 临时，先不管阶段分析算法
		
		var left,bottom;
		if(income<=400){
			left= income/400*1/3;
			// console.log(left)
		}else if(income>400&&income<=4000){
			left= income/4000*2/3;
			// console.log(left)
		}else {
			left= income/40000*1/3+2/3;
			// console.log(left)
		}

		var yheight=container.height();
		bottom=life/100*yheight;
		// console.log($(k).attr('title')+'bottom:'+bottom)
		//css to li
		$(k).css({
			width:size,height:size,margin:margin,
			background:bkcolor,
			left:left*100+'%',
			bottom:bottom+'px'
		});
		
		infoHtml+='<span style="background:'+bkcolor+'"></span>'+$(k).attr('title');
		////
	})
	
	container.after('<div id="gs-4d-chart-info">'+infoHtml+'</div>')
	

///////////////////
})

/*
.popu-most {background:#c00;width: 50px;height: 50px;}
.popu-more {background:#c90;width: 40px;height: 40px;}
.popu-normal {background:#396;}
.popu-less {background:#9cf;}
*/


// var Json4d={
// 	name:"世界人民收入变化",
// 	item:[
// 		{
// 			years:1900,
// 			coutries:[
// 				{
// 					name:"china",
// 					population:"1200000000",
// 					money:"1000"
// 				},
// 				{
// 					name:"usa",
// 					population:"300000000",
// 					money:"25000"
// 				}
// 			]
// 		},
// 		{
// 			years:2013,
// 			coutries:[
// 				{
// 					name:"china",
// 					population:"1400000000",
// 					money:"3500"
// 				},
// 				{
// 					name:"usa",
// 					population:"300000000",
// 					money:"35000"
// 				}
// 			]
// 		}
// 	]
	
// };