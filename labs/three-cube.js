var div = document.getElementById('three-cube');
var height = div.offsetHeight;
var width = div.offsetWidth;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
div.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
camera.position.z = 200;

var sceneT = new THREE.Scene();

var cube = new THREE.CubeGeometry(100, 100, 100);
var texture = THREE.ImageUtils.loadTexture('../pics/guoshuang128.png');
texture.anisotropy = renderer.getMaxAnisotropy();

var material = new THREE.MeshBasicMaterial({ map: texture });

var mesh = new THREE.Mesh(cube, material);
sceneT.add(mesh);

animate();

function animate() {

	requestAnimationFrame(animate);

	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;

	renderer.render(sceneT, camera);
}
