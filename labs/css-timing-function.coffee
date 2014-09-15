obj = $('#timing-example');
st = $('#timing-style');

st.append('#timing-example .ball { -webkit-animation: bouncing 3s infinite alternate linear ;-moz-animation: bouncing 3s infinite alternate linear ; } @-webkit-keyframes bouncing {0%{left:0;}100% {left:'+(obj.width()-60)+'px;} }@-moz-keyframes bouncing {0%{left:0;}100% {left:'+(obj.width()-60)+'px;} }');

$('#timing-example-controler li').click (e)->
	$(this).siblings().removeClass('c');
	$(this).addClass('c');
	st.empty().append('#timing-example .ball { -webkit-animation: bouncing 3s infinite alternate '+$(this).text()+';-moz-animation: bouncing 3s infinite alternate '+$(this).text()+'; } @-webkit-keyframes bouncing {0%{left:0;}100% {left:'+(obj.width()-60)+'px;}} @-moz-keyframes bouncing {0%{left:0;}100% {left:'+(obj.width()-60)+'px;}}');

# cubic-bezier(1,0,1,0)
$('#customize-bezier-timing .btn').click ->
	console.log($(this).parent().find('input').val())
	$('#timing-example-controler li').removeClass('c');
	st.empty().append('#timing-example .ball { -webkit-animation: bouncing 3s infinite alternate cubic-bezier('+$(this).parent().find('input').val()+');-moz-animation: bouncing 3s infinite alternate cubic-bezier('+$(this).parent().find('input').val()+'); } @-webkit-keyframes bouncing {0%{left:0;}100% {left:'+(obj.width()-60)+'px;}}@-moz-keyframes bouncing {0%{left:0;}100% {left:'+(obj.width()-60)+'px;}}');

### draw canvas ###

$('#theseCanvas canvas').each(->
	w=$(this)[0].width;
	h=$(this)[0].height;
	canvas = $(this)[0];
	ctx = canvas.getContext("2d");
	arr=$(this).attr('data-bezier').split(',');
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#333";
	ctx.beginPath();
	ctx.moveTo(0,h);
	ctx.bezierCurveTo(0+w*arr[0],h+h*arr[1],w*arr[2],h-h*arr[3],w,0);
	ctx.stroke();
)
