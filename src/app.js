
let stage = $('#stage');
let inputs = $('#inputs');
let slider_1 = $('<div></div>');
let slider_2 = $('<div></div>');

const SCENE_WIDTH = stage.width();
const SCENE_HEIGHT = stage.height();

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, SCENE_WIDTH/SCENE_HEIGHT, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({antialias: true});
let geometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterials = [
    new THREE.MeshBasicMaterial({color:0xff0000, transparent:true, opacity:0.6, side: THREE.DoubleSide, depthWrite: false}),
    new THREE.MeshBasicMaterial({color:0x00ff00, transparent:true, opacity:0.6, side: THREE.DoubleSide, depthWrite: false}),
    new THREE.MeshBasicMaterial({color:0x0000ff, transparent:true, opacity:0.6, side: THREE.DoubleSide, depthWrite: false}),
    new THREE.MeshBasicMaterial({color:0xffff00, transparent:true, opacity:0.6, side: THREE.DoubleSide, depthWrite: false}),
    new THREE.MeshBasicMaterial({color:0xff00ff, transparent:true, opacity:0.6, side: THREE.DoubleSide, depthWrite: false}),
    new THREE.MeshBasicMaterial({color:0x00ffff, transparent:true, opacity:0.6, side: THREE.DoubleSide, depthWrite: false}),
];
let cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
let cube = new THREE.Mesh(geometry, cubeMaterial);
cube.doubleSided = true;
let controls = new THREE.OrbitControls(camera, renderer.domElement);


THREE.Utils = {
    cameraLookDir: function(camera) {
        var vector = new THREE.Vector3(0, 0, -1);
        vector.applyEuler(camera.rotation, camera.eulerOrder);
        return vector;
    }
};

function mainLoop() {
    requestAnimationFrame(mainLoop);
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

slider_1.slider({min: 0.01, max: 1, step: 0.01, value: 0.5, orientation: "horizontal", slide: function(event, ui) {
    cube.scale.y = ui.value * 2;
}});
slider_2.slider({min: 0.01, max: 1, step: 0.01, value: 0.5, orientation: "horizontal", slide: function(event, ui) {
    cube.scale.x = ui.value * 2;
}});

stage.append(renderer.domElement);
inputs.append(slider_1);
inputs.append(slider_2);

mainLoop();



