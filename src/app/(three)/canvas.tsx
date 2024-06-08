'use client';

import { Canvas as R3FCanvas } from '@react-three/fiber';
import { ReactNode } from 'react';

export default function Canvas({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <R3FCanvas camera={{ fov: 40, position: [0, 0, 30] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </R3FCanvas>
  );
}
