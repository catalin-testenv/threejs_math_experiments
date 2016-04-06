
let stage = $('#stage');

const SCENE_WIDTH = stage.width();
const SCENE_HEIGHT = stage.height();

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, SCENE_WIDTH/SCENE_HEIGHT, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({antialias: true});
let geometry = new THREE.BoxGeometry(1, 1, 1);
let cubeMaterials = [
    new THREE.MeshBasicMaterial({color:0x33AA55, transparent:true, opacity:0.8}),
    new THREE.MeshBasicMaterial({color:0x55CC00, transparent:true, opacity:0.8}),
    new THREE.MeshBasicMaterial({color:0xf0f00f, transparent:true, opacity:0.8}),
    new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.8}),
    new THREE.MeshBasicMaterial({color:0x0000FF, transparent:true, opacity:0.8}),
    new THREE.MeshBasicMaterial({color:0x5555AA, transparent:true, opacity:0.8}),
];

var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, cubeMaterial);

let controls = new THREE.OrbitControls( camera );
controls.addEventListener('change', orbitControlsChanged);

function animate() {
    requestAnimationFrame( animate );
    // cube.rotation.y += 0.01;
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


stage.append(renderer.domElement);
animate();

$('.slider').slider({min: 0, max: 1, step: 0.01, value: 0, orientation: "horizontal", slide: function( event, ui ) {
    cube.scale.y = ui.value * 2;
}});