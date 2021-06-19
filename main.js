import './style.css'

import * as THREE from 'three';
import { LessStencilFunc } from 'three';

// 1. Scene
// 2. camera
// 3. Renderer

const scene = new THREE.Scene();

// first arg is field of view
// second arg is aspect ratio 
// third arg is view frustrum or what is visible from camera lens 


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000,  );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),

})

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );

// creating an Object:
// Geometry: the {x , y, z} points that makeup a shape 
// Material: the wrapping paper for an object
// Mesh: geometry + material

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus)

// render method called to see Animation
// set up game loop to render repeatedly

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );

}

animate()