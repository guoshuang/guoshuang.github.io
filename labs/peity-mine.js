var colorArr='#3083c8,#a5c838,#c4473a,#34586b,#006600,#338888,#318cbe,#623800,#a5c838,#ff3333,#34586b,purple,#2b4e82'.split(',');

jQuery(function($){
////////////////////

$('.peity').each(function(j,k){
	obj=$(this);
	if(obj.hasClass('line')){
		obj.peity('line',{
		// colour:colorArr[0],
		width:100,
		height:50
		// strokeColour:'red'
		})
	}else if(obj.hasClass('bar')){
		obj.peity('bar',{
			colours:colorArr,
			width:100,
			height:50
		})
	}else if(obj.hasClass('pie')){
		obj.peity('pie',{
			colours:colorArr,
			width:50,
			height:50
		})
	}
})




////////////////////
})