'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTF, SkeletonUtils } from 'three/examples/jsm/Addons.js';

type GLTFResult = GLTF & {
  nodes: {
    Smaug: THREE.Mesh;
  };
};

export default function DragonHead() {
  const { scene } = useGLTF('/objects/dragon.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const graph = useGraph(clone);
  const nodes = graph.nodes as GLTFResult['nodes'];

  const meshRef = useRef<THREE.Mesh>(null);

  const [dummy] = useState(() => new THREE.Object3D());
  useFrame((state, delta) => {
    const meshNode = meshRef.current;

    if (meshNode) {
      dummy.lookAt(state.pointer.x, state.pointer.y, 1);
      easing.dampQ(meshNode.quaternion, dummy.quaternion, 0.15, delta);
    }
  });

  return (
    <group dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.Smaug.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -20]}
      >
        <meshStandardMaterial wireframe opacity={0} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/objects/dragon.glb');
