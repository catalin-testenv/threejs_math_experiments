(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var stage = $('#stage');
var inputs = $('#inputs');
var slider_1 = $('<div></div>');
var slider_2 = $('<div></div>');

var SCENE_WIDTH = stage.width();
var SCENE_HEIGHT = stage.height();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, SCENE_WIDTH / SCENE_HEIGHT, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
var geometry = new THREE.BoxGeometry(1, 1, 1);
var cubeMaterials = [new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }), new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }), new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }), new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }), new THREE.MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }), new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false })];
var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, cubeMaterial);
cube.doubleSided = true;
var controls = new THREE.OrbitControls(camera, renderer.domElement);

THREE.Utils = {
    cameraLookDir: function cameraLookDir(camera) {
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

slider_1.slider({ min: 0.01, max: 1, step: 0.01, value: 0.5, orientation: "horizontal", slide: function slide(event, ui) {
        cube.scale.y = ui.value * 2;
    } });
slider_2.slider({ min: 0.01, max: 1, step: 0.01, value: 0.5, orientation: "horizontal", slide: function slide(event, ui) {
        cube.scale.x = ui.value * 2;
    } });

stage.append(renderer.domElement);
inputs.append(slider_1);
inputs.append(slider_2);

mainLoop();

},{}]},{},[1]);
