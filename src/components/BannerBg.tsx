'use client';

import { useCallback, useEffect, useState } from 'react';

import styles from './components.module.css';

export default function BannerBg() {
  const [orientation, setOrientation] = useState({
    beta: 0,
    gamma: 0,
  });

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    let x = event.beta; // In degree in the range [-180,180)
    let y = event.gamma; // In degree in the range [-90,90)

    setOrientation({
      beta: x || 0,
      gamma: y || 0,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.addEventListener('deviceorientation', handleOrientation);
    };
  }, [handleOrientation]);

  return <div className={styles['banner-bg']} />;
}
