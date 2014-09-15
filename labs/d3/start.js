
(function(){
  
//container of svg
var container=document.getElementById('d3-container');

//get min value of width and height
var circleSize=container.clientWidth<container.clientHeight?container.clientWidth:container.clientHeight;

var width = container.clientWidth,
    height = container.clientHeight,
    twoPi = 2 * Math.PI,
    progress = 0,
    // total = 1308573, // must be hard-coded if server doesn't report Content-Length
    total = 2329077,
    formatPercent = d3.format(".0%");

var arc = d3.svg.arc()
    .startAngle(0)
    .innerRadius(circleSize/2-100)
    .outerRadius(circleSize/2-50);

var svg = d3.select("#d3-container").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var meter = svg.append("g")
    .attr("class", "progress-meter");

meter.append("path")
    .attr("class", "background")
    .attr("d", arc.endAngle(twoPi));

var foreground = meter.append("path")
    .attr("class", "foreground");

var text = meter.append("text")
    .attr("text-anchor", "middle")
    .attr("dy", ".35em");

d3.json("/labs/2.mp3?" + Math.random())
    .on("progress", function() {
      // console.log(d3.event.loaded,total)

      var i = d3.interpolate(progress, d3.event.loaded / total);
      // console.log(i(10))

      d3.transition().tween("progress", function() {
        return function(t) {
          progress = i(t);
          foreground.attr("d", arc.endAngle(twoPi * progress));
          text.text(formatPercent(progress));

          if(text.text()=='100%'){
            text.text('完成！').attr('fill','red');
          }

        };
      });
    })
    .get(function(error, data) {

      //meter.transition().delay(0).attr("transform", "scale(0)");

    });

})()









