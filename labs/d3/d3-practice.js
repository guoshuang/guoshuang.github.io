jQuery(function($){
////////////


//eg. 1
d3.selectAll('#d3-1').style({
	background:gsColors[0]
});

//eg. 2
var svg=d3.select('#d3-2').append('svg').attr({
	width:'100%',
	height:300
}).style({
	background:'#eee'
})

var circle=svg.append('circle').attr({
	cx:'50%',
	cy:'50%',
	r:50
}).style({
	fill:gsColors[1],
	stroke:'#666',
	'stroke-width':'4px',
	cursor:'pointer'
})

//eg. 3
var arr= [
	{t:'郭爽',s:'130'},
	{t:'pusao',s:'140'},
	{t:'gongsao',s:'148'}
];

//get max data
var max=d3.max(arr,function(d){
	return d.s;
});

var table=d3.select('#d3-3').append('table').style({width:'100%'});

var tr=table.selectAll('tr').data(arr);
	
	tr.enter().append('tr');

	tr.append('td').classed({'min':true}).text(function(d,i){return i+1;}).style({color:'#999'});
	tr.append('td').classed({'min':true}).text(function(d){return d.t;});
	tr.append('td').append('div').html(function(d,i){
		return d.s;
	}).style({
		color:'#fff',
		background:function(d,i){
			return gsColors[i];
		},
		width:function(d,i){
			return d.s/max*100+'%';
		}
	});


////////////	
})