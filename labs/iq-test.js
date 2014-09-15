jQuery(function($){
////////////

var d1=[
    // {label:'数据1',data:arr1,color:'red'},
    // {label:'数据2',data:arr2,color:'green'}
    {label:'智商分布',data:[
      [1,0.1], [2,2.1], [3,13.6], [4,34.1], [5,34.1], [6,13.6], [7,2.1], [8,0.1]
    ]}
]

var option1={
    legend:{
      show:true,
      position:'nw'
    },
    series:{
        bars:{
          show:true,barWidth:0.65,order:1,align:'center', lineWidth:1,
          numbers:{
            color:'rgba(0,0,0,.5)',
            font:'14px arial',
            show:true,
            xAlign:50,
            yAlign: function(y) { return y + 5; },
          }
        },
        // lines:{show:true,fill:true,steps:true,align:'right'},

    },
    xaxis:{
          tickLength: 1,
          ticks:[[1,'低于55'],[2,'55-70'] ,[3,'70-85'] ,[4,'85-100'] ,[5,'100-115'] ,[6,'115-130'] ,[7,'130-145'] ,[8,'大于145']
          ]

        },
    yaxis:{
          // tickLength: 1,
          tickFormatter: (function formatter(val, axis) { 
            // console.log(val,axis);
            return val + "%"}) 
        },
    grid:{
      // show:false,
      borderWidth:0,
      hoverable: true,
      autoHighlight: true,
      // borderColor:'#c00',
      // backgroundColor: "#c00",
      markings: [
      { 
        name:'laoguo',
        color: '#cc4900', 
        lineWidth: 0, 
        xaxis: { from: 6.48, to: 6.52 } 
      },
      { 
        name:'pusao',
        color: '#219bca', 
        lineWidth: 0, 
        xaxis: { from: 6.98, to: 7.02 } 
      },
      { 
        name:'gongsao',
        color: '#63b920', 
        lineWidth: 0, 
        xaxis: { from: 7.98, to: 8.02 } 
      }
    ]

    },
    colors:['#06c','#c60'],
    crosshair: { mode: "x" }
}

var flot_bar=$.plot('#iq-test-chart',d1,option1);


// flot_bar.getOptions().grid.markings[0].xaxis.from=4;
// flot_bar.getOptions().grid.markings[0].xaxis.to=7;
// flot_bar.draw();

// console.log(flot_bar.getOptions())

//老郭动画

var gs_ani=(function(){
////--

var options=flot_bar.getOptions();
var ani_width=1;//起始宽度
var ani_step=8;//步伐
var from=options.grid.markings[0].xaxis.from;
var to=options.grid.markings[0].xaxis.to;

var ft=from-ani_width;
var tt=to+ani_width;

var timer2gs =setInterval(function(){
  var step=ani_width/ani_step;
  ft=ft+step;
  tt=tt-step;

  if(ft>=from-step/2){clearInterval(timer2gs)}

  options.grid.markings[0].xaxis.from=ft;
  options.grid.markings[0].xaxis.to=tt;
  flot_bar.draw();
  // console.log(ft,tt,from)
  
},200)

var btns=$('#btn-group-2013-11-28');

btns.on('mouseenter','.gongrui',function(){
  flot_bar.highlight(0,7);
})

btns.on('mouseenter','.pujian',function(){
  flot_bar.highlight(0,6);
})

btns.on('mouseenter','.laoguo',function(){
  flot_bar.highlight(0,5);
  flot_bar.highlight(0,6);
})

btns.on('mouseleave','.btn',function(){
  flot_bar.unhighlight();
})

////--
})();


////////////
})