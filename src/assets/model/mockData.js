// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// const scene = new THREE.Scene();
import cubo from "../models3d/Cubo.glb"
console.log(cubo)
// const loader = new GLTFLoader();

// loader.load( '../models3d/Cubo.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

export const jsonMock = {
    linksGLB: [
      "https://s3.amazonaws.com/modelviwer.dev/models-3d/Astronaut+(1).glb",
      // loader,
      "https://s3.amazonaws.com/modelviwer.dev/models-3d/bebe01.glb",
    ],
    linksUSDZ: [
      "https://s3.amazonaws.com/modelviwer.dev/models-3d/Astronaut+(1).usdz",
      "https://s3.amazonaws.com/modelviwer.dev/models-3d/bebe01.usdz",
      "https://s3.amazonaws.com/modelviwer.dev/models-3d/Arteria.usdz",
    ],
    icons: ["AcUnit", "AccessAlarm", "AddCircle"],
  };