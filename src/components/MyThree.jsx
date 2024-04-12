import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { GradientTexture, OrbitControls, Sphere, useCubeTexture, useEnvironment } from '@react-three/drei';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture';

export default function MyThree() {

    return (
      <div className='absolute left-32 xl:left-72 top-10 -z-10' style={{ height: '60vh', width: '65vh' }} >
        <Canvas className='' camera={{ position: [0, 0, 5]}}>
          <OrbitControls autoRotate={true} enableZoom={false} />
          <directionalLight />
          <pointLight position={[-10, 0, -10]} power={500.0} color="#ffffff" />
          <Circle />
        </Canvas>
      </div>
    );
}

function Circle() {

  var texture = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: "sphere/"}
  )
  
  return (
    <group>
      <Sphere position={[0, 0, 0]} args={[2.7, 64, 64]}>
        <meshStandardMaterial
        color={new THREE.Color(0xffffff)}
        emissive={new THREE.Color(0xa93737)}
        emissiveIntensity={0.10}
        roughness={0.15}
        metalness={0.6}
        envMap={texture}>
          <GradientTexture stops={[0, 0.25, 0.5, 0.75, 1]} colors={['#6600ff', '#a409b5', '#e83c45', '#c22338', '#f2900f']} />
        </ meshStandardMaterial>
      </Sphere>
    </group>
  )
}