### 
davidguoshuang at gmail.com 2013-05-29
### 

$cylinder=$('#circle_3d_thick');
$slider=$('#circle_3d_thick_slider');

$slider.slider
	orientation:'vertical'
	value:-1*(75/0.9-100)
	slide:(e,ui)-> 
		# console.log((100-ui.value)*0.9)
		$cylinder.css
			'transform': 'rotateX('+(100-ui.value)*0.9+'deg)'

$cylinder.append('<div class="shadow"></div>');
$cylinder.css
	'transform':'rotateX(75deg)'

### 
给桶里放点东西？
### 

laoguo=$('<div class="stuff" style="position:absolute;font-size:30px;">老郭</div>')


$cylinder.append(laoguo);

laoguo.css
	'transform-origin':'50% 50%'
	'transform':'rotateX(-90deg)  translateX(45px) translateY(-35px) translateZ(35px)'
	'z-index':10
	'left':'0'
	'top':'0'

