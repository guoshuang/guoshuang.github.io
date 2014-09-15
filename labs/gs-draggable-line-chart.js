
jQuery(function($){
//////////////

var container = $('#gs-draggable-line-chart-div');
var input=container.find('input');
var svg=container.find('.svg');
var cw=svg.width();
var ch=svg.height();
var digital=1;//小数位数

// console.log(cw,ch)

//random array
var arr=[];
var max=10;//最大数字
var quantity=5;//数量
var margin=10;//留出margin 10
var radius=5;
var ballColor='rgba(255,0,0,0.5)';

for(i=0;i<quantity;i++){
	arr.push(Math.floor(Math.random()*max));
}
input.val(arr);

//draw svg 

function draw(){
	var html='<svg height="100%" width="100%" style="background:#eee;">';
	var stepx=(cw-margin*2)/(arr.length-1);//数量-1 等份
	var stepy=(ch-margin*2)/(max);//这个不减 0~15 共 16 个
	$.each(arr,function(j,k){

			x1=stepx*j+margin;
			y1=ch-stepy*k-margin;	

		if(j!=quantity-1){//最后一个不画线
			x2=stepx*(j+1)+margin;
			y2=ch-stepy*arr[j+1]-margin;
			html+='<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" style="stroke:rgb(255,0,0);stroke-width:2" />';
		}

		html+='<circle id="c_'+j+'" cx="'+x1+'" r="'+radius+'" cy="'+y1+'" fill="'+ballColor+'" />';
	})

	html+='</svg>'
	svg.html(html);

	
	//draggable -- jquery ui 的 left top 对 svg 没用！需要自己处理
	var dragx,dragy;
	svg.find('circle').draggable({
		axis:'y',
		containment:svg,
		start:function(e,ui){
			dragx=ui.position.left;
			dragy=ui.position.top;
		},
		stop:function(e,ui){
			var x=$(this).attr('cx')-dragx+ui.position.left;
			var y=$(this).attr('cy')-dragy+ui.position.top;

			// console.log($(this).attr('id'),y,(ch-margin*2-y+margin)/stepy)

			var index=$(this).attr('id').substr(2)
			// console.log(index)
			arr[index]=((ch-margin*2-y+margin)/stepy).toFixed(digital);

			// console.log(arr);
			input.val(arr.join(','));

			// max=Math.max.apply(Math,arr);
			draw();//全部重画

			//只画自己
			// $(this).attr('cx',x);
			// $(this).attr('cy',y)
		}
	})

}

draw();

input.on('blur',function(){
	try{
		arr=$(this).val().split(',')
	}
	catch(e){
		alert(e);
	}
	max=Math.max.apply(Math,arr);
	quantity=arr.length;
	draw();	
})

//easy resize
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c;};
 
on_resize(function() {
	cw=svg.width();
  draw();
});

//////////////	
})