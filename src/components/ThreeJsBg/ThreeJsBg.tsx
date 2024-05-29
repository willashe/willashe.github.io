'use client';

import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import styles from './ThreeJsBg.module.scss';

const Sphere = () => {
  const meshRef = useRef<ThreeElements['mesh']>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    const meshNode = meshRef.current;

    if (meshNode) {
      meshNode.rotation.y = Math.sin(t) * (Math.PI / 8);
      meshNode.rotation.x = Math.cos(t) * (Math.PI / 8);
      meshNode.rotation.z -= delta / 4;

      meshNode.material.transparent = true;

      if (meshNode.material.opacity <= 0.2) {
        meshNode.material.opacity += 0.005;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 12, 8]} />
      <meshStandardMaterial wireframe opacity={0} />
    </mesh>
  );
};

export default function ThreeJsBg() {
  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
      </Canvas>
    </div>
  );
}
