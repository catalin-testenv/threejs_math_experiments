
import THREE from '../vendor/threejs/three.min';

const SCENE_WIDTH = 800;
const SCENE_HEIGHT = 600;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, SCENE_WIDTH/SCENE_HEIGHT, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshBasicMaterial( { color: 0x009900 } );
let cube = new THREE.Mesh( geometry, material );
function render () {
    requestAnimationFrame( render );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

renderer.setSize(SCENE_WIDTH, SCENE_HEIGHT);
camera.position.z = 5;
scene.add( cube );


document.body.appendChild( renderer.domElement );
render();