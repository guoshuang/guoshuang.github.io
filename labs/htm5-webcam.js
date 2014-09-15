//兼容浏览器
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

jQuery(function($){
///////

//视频容器
var video = $('#yourcam');

//显示摄像头
if (navigator.getUserMedia) {
  navigator.getUserMedia(
    // {audio: true, video: true}, //要求音视频
    {//要求视频分辨率 hd 高清
      video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        }
      }
    },
    function(stream) {
      video.attr('src',window.URL.createObjectURL(stream));
      localMediaStream = stream;
    }, errorCallback);
}else{
  console.log('你的浏览器不支持！');
}

function errorCallback(){
  console.log('发生错误！');
}

//截图
var img = $('#yourcam-screenshot');
var canvas = $('#yourcam-canvas');
var ctx = canvas[0].getContext('2d');
var localMediaStream = null;

function snapshot() {

  //可选；保持 canvas img  大小和 video 一样  --start
  var w=video.width();
  var h=video.height();
  canvas.attr({width:w,height:h});
  img.attr({width:w,height:h});
  //可选；保持 canvas img  大小和 video 一样  --end

  if (localMediaStream) {
    ctx.drawImage(video[0], 0, 0);
    img.attr('src',canvas[0].toDataURL('image/webp'));// "image/webp"  Chrome ；其它浏览器是 image/png.
  }
}

$('#yourcam-btn')[0].addEventListener('click', snapshot, false);

//滤镜

var filerArr=["blur","brightness","contrast","hue-rotate","hue-rotate2","hue-rotate3","saturate","grayscale","sepia","invert"];
var filtersHtml=''; 

$.each(filerArr,function(j,k){
  filtersHtml+='<span>'+k+'</span>';
})

$('#webcam-filters').html(filtersHtml).on('click','span',function(){
  $(this).siblings().removeClass('active');alert(1)
  video.removeClass().addClass($(this).text())
})

///////
})

