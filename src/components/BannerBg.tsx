'use client';

import { useCallback } from 'react';

import styles from './components.module.css';

export default function BannerBg() {
  const callbackRef = useCallback((node: HTMLDivElement) => {
    // TODO: debounce
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let x = event.beta; // -180 - 180
      let y = event.gamma; // -90 - 90

      if (node && x !== null && y !== null) {
        node.style.backgroundPositionX = `${x * (100 / 180)}%`;
        node.style.backgroundPositionY = `${y * (50 / 90)}%`;
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.addEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return <div ref={callbackRef} className={styles['banner-bg']} />;
}
