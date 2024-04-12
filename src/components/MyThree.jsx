import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture';

export default function MyThree() {
    const refContainer = useRef(null);
    useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    
    var geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
    var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
    var sphere = new THREE.Mesh( geometry, material );
    
    scene.add( sphere );

    
    camera.position.z = 60;
    var animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div ref={refContainer}></div>
  );
}