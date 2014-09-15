function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
    event.dataTransfer.effectAllowed = "copyMove";
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 
var dm = document.getElementById('native-drag-div'); 

dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false);
document.body.addEventListener('drop',drop,false); 


(function(){

// var div=$('#native-drag-div');

// var x1,y1;

// div.on('dragstart',function(e){
// 	e=e.originalEvent;
// 	x1=e.clientX;
// 	y1=e.clientY;
// 	// console.log(div.position().left)
// 	e.dataTransfer.effectAllowed = "copyMove";
// })

// var article=div.parents('article');
// var offsetx=article.position().left;
// var offsety=article.position().top;

// div.on('dragend',function(e){
// 	e=e.originalEvent;
// 	x2=e.clientX;
// 	y2=e.clientY;
// 	console.log(x1,y1)
// 	var left=x2-x1+div.position().left;
// 	var top=y2-y1+div.position().top;
// 	$(this).css({
// 		left:x2+'px',
// 		top:y2+'px'
// 	})
// })

})()