/*
* guoshuang for fun.2013-05-09
*/
function getMusicTimer(){
	var o=$('#mPlayer')[0];
	return Math.floor(o.currentTime*100)/100;
}

function seconds2min(ot){
	var m= Math.floor(ot/60);
	m=m<10?'0'+m:m;
	var s= Math.floor(ot%60);
	s=s<10?'0'+s:s;

	return m+':'+s;
}

var lrcArr=[];
var musicTimer=null;
var duration=0;
var musicSrc;

$.ajax({
	url: $('#mPlayer').attr('data-lyric'),
	async:false,
	success:function(d){
		//console.log(d.split('\n'))
		var arr=d.split('\n');
		$.each(arr,function(j,k){
			var ar=k.split(']');
			var temp=ar[0].substr(1)
			temp=parseInt(temp.substr(0,2),10)
			ar[0]=temp*60+(ar[0].substr(4)*100/100)
			lrcArr.push(ar)
		})
	}
})

var tempLrc=$.extend(true, [], lrcArr);//clone array

$(function(){
////
var player=$('#mPlayer')[0];


$('#mPlayer').on('loadeddata',function(){
	duration=$(this)[0].duration
	//var musicSrc=player.src;

//console.log($('#mPlayer')[].attr('src'))
})

$('#mPlayer').on('ended',function(){
	//console.log($(this)[0].currentTime);
	clearInterval(musicTimer);
	tempLrc=lrcArr;
	player.load()

	//console.log($('#mPlayer').attr('src'))
	//player.src=play;
	//$('#mPlayer').attr('src',$('#mPlayer').attr('src'))

})

$('#play-20130508').on('click',function(){
	player.play();
	musicTimer=setInterval(function(){

		var t=getMusicTimer();
		//console.log(t,tempLrc.length)
		
		// if(duration==0){
		// 	$('#soneTimer-20130508').text(t+'秒')
		// }else{
		// 	$('#soneTimer-20130508').text('还剩：'+Math.floor(duration-t)+'秒')
		// }

		$('#soneTimer-20130508').text(seconds2min(t)+'秒')
		
		if(tempLrc.length==0){
			clearInterval(musicTimer);
			//return;
		}else{
			if(t>=tempLrc[0][0]){
				div.text(tempLrc[0][1]);
				tempLrc.shift()	
			}
		}
	},500)
})

$('#pause-20130508').on('click',function(){
	player.pause();
	clearInterval(musicTimer);
})

var div=$('#showLyrics-20130508');

////
})