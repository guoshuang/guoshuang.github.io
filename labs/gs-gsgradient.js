var gsGradient = {
	burn:        [[246,233,24],  [203,19,32]],
	grayPower:   [[229,229,299], [26,26,26]],
	greenPower:  [[245,248,221], [198,224,142], [64,175,94],   [9,74,36]],
	heatmap:     [[143,217,16],  [246,233,24],  [203,19,32]],
	thermometer: [[23,54,125],   [121,190,213], [214,228,231], [242,146,133], [203,19,32]]
};

var gsColors=["#3083c8", "#a5c838", "#c4473a", "#34586b", "#006600", "#338888", "#318cbe", "#623800", "#a5c838", "#ff3333", "#800080", "#2b4e82"];

jQuery(function($){
/////////

var html='';
var tbHtml='';
var maxNum=100;//max number in table

$.each(gsGradient,function(j,k){
	html+='<h3>'+j+'</h3>'
	html+='<ul class="'+j+'">';
	var total=k.length;
	$.each(k,function(n,m){
		html+='<li style="background:rgb('+m[0]+','+m[1]+','+m[2]+');width:'+(1/total*100)+'%">&nbsp;</li>';
	})
	html+='</ul>';

	//draw table with color + opacity --start
	html+='<p>'+j+' - color + opacity</p><table width="100%">';
	for(a=0;a<4;a++){
		html+='<tr>';
		for(b=0;b<6;b++){
			var ran=Math.floor(Math.random()*maxNum);
			var multi=Math.floor(ran*total/maxNum);
			var color='rgba('+k[multi][0]+','+k[multi][1]+','+k[multi][2]+','+(Math.random())+')';
			html+='<td style="background:'+color+';text-align:center;">'+ran+'</td>';
		}
		html+='</tr>';
	}
	html+='</table>';
	//draw table with color + opacity --end

})

html+='<h3>gsColors</h3><ul>';
$.each(gsColors,function(j,k){
	html+='<li style="background:'+k+';padding:10px;color:rgba(255,255,255,.5)">'+k+'</li>'
})
html+='</ul>';

$('#gsGradient-demo').append(html);



/////////
})