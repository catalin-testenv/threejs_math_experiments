
let stage = $('#stage');
let inputs = $('#inputs');
let slider_1 = $('<div class="slider"></div>');

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
let cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
let cube = new THREE.Mesh(geometry, cubeMaterial);
let controls = new THREE.OrbitControls(camera);


THREE.Utils = {
    cameraLookDir: function(camera) {
        var vector = new THREE.Vector3(0, 0, -1);
        vector.applyEuler(camera.rotation, camera.eulerOrder);
        return vector;
    }
};

function main() {
    requestAnimationFrame(main);
    // cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}

function orbitControlsChanged(e) {
    //console.log(THREE.Utils.cameraLookDir(camera));
}

controls.addEventListener('change', orbitControlsChanged);
renderer.setSize(SCENE_WIDTH, SCENE_HEIGHT);
camera.position.z = 5;
scene.add(cube);

slider_1.slider({min: 0.01, max: 1, step: 0.01, value: 0.01, orientation: "horizontal", slide: function(event, ui) {
    cube.scale.y = ui.value * 2;
}});

stage.append(renderer.domElement);
inputs.append(slider_1);

main();



