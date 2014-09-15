/**/

var wallMaxValue=10;
var wallCount=10;
var wrapperHeight=200;//容器高度
var testInfo=[];//测试数据

function maxWater(arr) {
  var left = 0,
      right = arr.length - 1,
      leftMax = arr[left],
      rightMax = arr[right],
      volume = 0;

  while (left < right) {

    if (leftMax < rightMax) {
      var height = arr[++left];
      leftMax = Math.max(leftMax, height);
      volume += leftMax - height;

      drawWater(leftMax - height,left,arr);
    } else {

      var height = arr[--right];
      rightMax = Math.max(rightMax, height);
      volume += rightMax - height;

      drawWater(rightMax - height,right,arr);
    }  

  }
  return volume;
}

function drawWater(water,index,arr){
  testInfo.push({'序号':index,'水量':water});

  var containter=$('#twitter-puddle');
  if(water>0){
    containter.find('.water li:eq('+index+')').animate({
      height:wrapperHeight/wallCount*(arr[index]+water)+'px'
    },1000)
  }
}

jQuery(function($){
/////////////

//draw the random walls

var arr=[];
var liHtml='<ul class="wall">';
var waterLi='<ul class="water">';//水容器

for(i=1;i<wallCount+1;i++){
  var ran=parseInt(Math.random()*wallMaxValue);

  var w=100/wallCount;
  var h=wrapperHeight*ran/wallMaxValue;
  var left=w*(i-1);

  arr.push(ran);
  liHtml+='<li style="width:'+w+'%;height:'+h+'px;left:'+left+'%;"><div class="num">'+ran+'</div></li>';
  waterLi+='<li style="width:'+w+'%;left:'+left+'%"></li>';
}
liHtml+='</ul>';
waterLi+='</ul>';

$('#twitter-puddle-arr').text(arr);

var twitter_puddle=$('#twitter-puddle');

twitter_puddle.append(liHtml+waterLi);
$('#twitter-puddle-info').text(testInfo+' 容水量： '+maxWater(arr));
$('#twitter-puddle-info2').text(JSON.stringify(testInfo));

//raining

twitter_puddle.append('<div class="rainContainer"></div>');
var rain=twitter_puddle.find('.rainContainer');

rain.html(raining(30,twitter_puddle.width(),twitter_puddle.height()))

setInterval(function(){
  rain.html(raining(30,twitter_puddle.width(),twitter_puddle.height()))
},2000)


/////////////
})

function raining(num,max_w,max_h){
  var divs='';
  for(i=0;i<num;i++){
    var left=max_w*Math.random();
    var top=max_h*Math.random();
    divs+='<div style="left:'+left+'px;top:'+top+'px;"></div>'
  }
  return divs;
}
