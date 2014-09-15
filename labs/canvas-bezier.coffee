canvas = document.getElementById("canvas-bezier");
ctx = canvas.getContext("2d");

canvas_animate = (beizx)->
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#c00";
	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.bezierCurveTo(beizx,150,200,100,310,10);
	ctx.stroke();

	# console.log(ctx)
	ctx.font = '16px arial';
	ctx.fillText('起点(10,10)',25,18);
	ctx.fillText('终点(310,10)',200,18);

	ctx.beginPath();
	ctx.lineWidth = 1; 
	ctx.moveTo(10,10);
	ctx.strokeStyle = "green";
	ctx.lineCap   = 'round';
	# ctx.dashedLine(10,10,10,150,[3,4]);###垂直竖线正好画不出来！###
	ctx.lineTo(beizx,150);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(200,100);
	ctx.lineTo(310,10);
	ctx.stroke();

	ctx.beginPath();
	# centerX, centerY, radius, 0, 2 * Math.PI, false
	ctx.arc(beizx,150, 4, 0, 2*Math.PI,false);
	ctx.arc(200,100, 4, 0, 2*Math.PI,false);
	ctx.fillStyle = 'green';
	ctx.fill();

	ctx.beginPath();
	ctx.arc(10,10, 4, 0, 2*Math.PI,false);
	ctx.arc(310,10, 4, 0, 2*Math.PI,false);
	ctx.fillStyle = '#c00';
	ctx.fill();

# canvas_animate(60);
### animation start ###

beizx = 10;

timer1=setInterval(->
	if beizx<150
		ctx.clearRect(0,0,canvas.width,canvas.height)
		canvas_animate(beizx);
		beizx+=2;
	else
		beizx+=1;
		if beizx >300
			beizx=10;
,50)



