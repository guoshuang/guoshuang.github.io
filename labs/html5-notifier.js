jQuery(function($){
/////////

var notification_test;

$('#btn-notifier').on('click',function(){
    if(window.webkitNotifications.checkPermission()!=0){
        //0 表示有权限！
        window.webkitNotifications.requestPermission();
    }else{
        
        notification_test = window.webkitNotifications .createNotification('/pics/gs.jpg', '谁说女儿不如男', '洁里就是要骚扰的信息');

        notification_test.ondisplay = function() { 
            console.log('diplay');
            var sound=$('#html5-notifier-sound')[0];
            sound.load();
            sound.play();
        };

        notification_test.onclose = function() { 
            console.log('close');
            alert('看过啦，不，是关啦！');
        };

        notification_test.show();

        notification_test.onclick = function(x) {
            //获得焦点
            window.focus(); this.cancel(); 
        };

        $('#btn-notifier-close').on('click',function(){
            notification_test.close();
        })


    }
}).trigger('click');



/////////
})