'use client';

import { useEffect, useState } from 'react';

import styles from './components.module.css';

export default function BannerBg() {
  const [orientation, setOrientation] = useState<{
    x: number;
    y: number;
  } | null>();

  useEffect(() => {
    // TODO: debounce
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let x = event.beta || 0; // -180 - 180
      let y = event.gamma || 0; // -90 - 90

      setOrientation({ x, y });
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.addEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <>
      <div
        className={styles['banner-bg']}
        style={{
          animation: orientation ? 'none' : undefined,
          backgroundPositionX: orientation
            ? `${Math.round((orientation.y + 90) * (100 / 90))}%`
            : undefined,
        }}
      />
      <div>{orientation ? orientation.y : null}</div>
    </>
  );
}
