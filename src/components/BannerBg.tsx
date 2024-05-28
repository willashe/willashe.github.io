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
      let x = event.beta; // -180 - 180
      let y = event.gamma; // -90 - 90

      if (x !== null && y !== null) {
        setOrientation({
          x,
          y,
        });
      }
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
            ? `${(orientation.x + 180) * (100 / 360)}%`
            : undefined,
        }}
      />
      <div>{`${(orientation?.x || 0 + 180) * (100 / 360)}%, ${orientation?.y}`}</div>
    </>
  );
}
