(function(){

var blue=document.getElementById('addEventListenerDiv');
var red=document.getElementById('addEventListenerDiv').firstChild;
var blue_input=document.getElementById('addEventListener-blue');
var red_input=document.getElementById('addEventListener-red');
var btn=document.getElementById('addEventListener-bubble');
var msg=document.getElementById('addEventListenerDiv-msg');

function show(){
		msg.innerHTML+='<span style="color:'+this.className+'">'+this.className+'</span> ';
}

function reset(){
	msg.firstChild.nodeValue='';
	red.removeEventListener("click", show, true)
	blue.removeEventListener("click", show, true)
	red.removeEventListener("click", show, false)
	blue.removeEventListener("click", show, false)
}

function addAgain(){
	reset();
	red.addEventListener("click", show, red_input.value==="true"?1:0)
	blue.addEventListener("click", show, blue_input.value==="true"?1:0)
}

blue_input.onclick=function(){
	this.value=this.value=='true'?'false':'true';
	addAgain();
}

red_input.onclick=function(){
	this.value=this.value=='true'?'false':'true';
	addAgain();
}

red.addEventListener("click", show , false)
blue.addEventListener("click", show , false)

//reste msg text
blue.addEventListener("mouseup", function(){msg.innerHTML='';} , false)

})()