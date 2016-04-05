
import THREE from '../vendor/threejs/js/three';
import '../vendor/threejs/extra/OrbitControls';

const SCENE_WIDTH = 800;
const SCENE_HEIGHT = 600;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, SCENE_WIDTH/SCENE_HEIGHT, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshBasicMaterial( { color: 0x009900 } );
let cube = new THREE.Mesh( geometry, material );

let controls = new THREE.OrbitControls( camera );
controls.addEventListener( 'change', orbitControlsChanged );

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}

THREE.Utils = {
    cameraLookDir: function(camera) {
        var vector = new THREE.Vector3(0, 0, -1);
        vector.applyEuler(camera.rotation, camera.eulerOrder);
        return vector;
    }
};

function orbitControlsChanged(e) {
    //console.log(THREE.Utils.cameraLookDir(camera));
}

renderer.setSize(SCENE_WIDTH, SCENE_HEIGHT);
camera.position.z = 5;
scene.add( cube );


document.body.appendChild( renderer.domElement );
animate();