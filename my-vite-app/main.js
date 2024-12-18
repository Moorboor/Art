const images = ['Adventdalen.png', 
  'BeachSunset.png', 
  'CoalMine.png', 
  'EiderDuck.png', 
  'Elvesletta.png', 
  'Endalen.png', 
  'FugleFjella.png', 
  'Gruve2.png', 
  'JasonRobertsProduction.png', 
  'Longyearbyen1.png', 
  'Longyearbyen2.png', 
  'MineCart.png', 
  'Nordenskiöldbreen.png', 
  'Nybyen.png', 
  'PyramidenBuilding.png', 
  'Sarkofagen.png', 
  'Sarkofagen1.png', 
  'Sarkofagen2.png', 
  'StudentCabin.png', 
  'Sunset.png', 
  'Svalbardbutikken.png', 
  'SvalbardChurch.png', 
  'Walrus.png']

  
const gallery = document.getElementById('gallery');



images.forEach(image => {

  const section = document.createElement('section');
  section.classList.add('light');

  const heading = document.createElement('h2');
  heading.textContent = `${image.slice(0,-4)}`;
  


  const img = document.createElement('img');
  img.src = "./resources/imgs/"+image;
  img.alt = `Description of ${image}`;
  img.style.maxWidth = '100%';
  img.style.height = 'auto';


  const p = document.createElement('p');
  //p.textContent = `${image.slice(0,-4)}`;


  section.appendChild(heading);
  section.appendChild(img);
  section.appendChild(p);

  gallery.appendChild(section);
});


















// import "./style.css"
// import * as THREE from "three";
// import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";


// const scene = new THREE.Scene();


// const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#bg"),
// });

// let directionalLight = new THREE.DirectionalLight(0xffffff, 20);
// directionalLight.castShadow = true;
// directionalLight.position.set(0,7,4);
// scene.add(directionalLight);

// let loadedGLTFModel;

// function _LoadGLTFModel(){
//   const loader = new GLTFLoader();
//   loader.load("LabForm1.glb", (gltf) => {
//       gltf.scene.scale.multiplyScalar(10);
//       gltf.scene.rotateY(-Math.PI/2)
//       gltf.scene.position.set(20, 5, 3)
//       loadedGLTFModel = gltf.scene;
//       scene.add(gltf.scene);
//       console.log("GLTF loaded.");
//   });
// }
// _LoadGLTFModel();

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);




// function animate(){
//   requestAnimationFrame(animate);
//   loadedGLTFModel.rotation.z += 0.01;
//   loadedGLTFModel.rotation.y += 0.005;
//   renderer.render(scene, camera);
// }

// animate();

