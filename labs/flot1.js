jQuery(function($){
//////////////////////

//柱图和折线图
var arr1=[];
var arr2=[];
var arr3=[];
var arr4=[];
var max=100;



for(i=0;i<20;i++){
    if(i%2==0){
        arr1.push([i,Math.random()*max]);
    }else{
        arr2.push([i,Math.random()*max]);
    }
    arr3.push([i,Math.random()*max]);
    arr4.push([i,Math.random()*max]);
}

console.log(arr1,arr3)

var data1=[
    // {label:'数据1',data:arr1,color:'red'},
    // {label:'数据2',data:arr2,color:'green'}
    {label:'数据1',data:arr1},
    {label:'数据2',data:arr2}
]

var option1={
    series:{
        bars:{show:true,barWidth:0.6,order:1,align:'left'}        
    },
    grid:{borderWidth:0},
    colors:['#06c','#c60']
}

var option2={
    series:{
        lines:{show:true}        
    },
    grid:{borderWidth:0},
    colors:['#06c','#c60']
}

var option2_steps={
    series:{
        lines:{show:true,steps:true}        
    },
    grid:{borderWidth:0},
    colors:['#06c','#c60']
}

var flot_bar=$.plot('#flot-bars',data1,option1);
var flot_line=$.plot('#flot-lines',data1,option2);

$('#flot-step-btn').on('click',function(){
    var flot_line=$.plot('#flot-lines',data1,option2_steps);
})

$('#flot-step-btn-no').on('click',function(){
    var flot_line=$.plot('#flot-lines',data1,option2);
})

//饼图

var data3=[
    {label:'数据1',data:20},
    {label:'数据2',data:80},
    {label:'数据3',data:70},
    {label:'数据4',data:10},
    {label:'数据5',data:34}
]

var option3={
    series:{
        pie:{show:true}        
    },
    grid:{borderWidth:0},
    colors:['#c60','#6c0','#06c','#cc0','#0cc']
}

var flot_pie=$.plot('#flot-pie',data3,option3);



//stack

$('#flot-stack-btn1').on('click',with_stack);
$('#flot-stack-btn2').on('click',without_stack);

without_stack();//默认是 without_stack

function with_stack(){
    var flot_stack=$.plot('#flot-stack',[
            {label:'数据3',data:arr3},
            {label:'数据4',data:arr4}
        ],{
          series:{
                bars:{show:true},
                stack:true

            },
            grid:{borderWidth:0},
            colors:['#06c','#c60']  
           }
    );
}

function without_stack(){
    var flot_stack=$.plot('#flot-stack',[
            {label:'数据3',data:arr3},
            {label:'数据4',data:arr4}
        ],{
          series:{
                bars:{show:true},
                stack:null

            },
            grid:{borderWidth:0},
            colors:['#06c','#c60']  
           }
    );
}

// x 轴文字

// var data4 =[ [ ["123344", 10], ["周二", 8], ["周三", 4], ["周四", 13], ["周五", 17], ["周六", 9], ["周日", 1] ]];

var data4 = [
    {
        label:'项目A',
        data:[ ["周一", 10], ["周二", 8], ["周三", 4], ["周四", 13], ["周五", 17], ["周六", 9], ["周日", 1] ]
    },
    {
        label:'项目B',
        data:[ ["周一", 55], ["周二", 5], ["周三", 3], ["周四", 8], ["周五", 12], ["周六", 3], ["周日", 2] ]
    }
]

//这个 tooltips 有bug，x y 必须是数字！不能是字符串！

$.plot("#flot-categories", data4, {
    series: {
        bars: {
            show: true,
            barWidth: 0.65,
            align: "center"
        },
        stack:1
    },
    xaxis: {
        mode: "categories",
        tickLength: 0
    },
    grid: { 
        hoverable: true, 
        clickable: true, 
        tickColor: "#ccc",
        borderWidth: 0
      },
    colors:['#06c','#c60'],
    tooltip:true,
    tooltipOpts : {
        content : " %s %y",
        defaultTheme : false
      }
});

//////////////////////
})
