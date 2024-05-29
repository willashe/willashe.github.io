'use client';

import { useEffect, useState } from 'react';

import styles from './components.module.scss';

type BgBannerProps = {
  debug?: boolean;
};

export default function TestBgBanner({ debug }: BgBannerProps) {
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
      <div className={styles['bg-banner']} />
      {debug ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            margin: 8,
            color: 'white',
            fontFamily: 'monospace',
            fontSize: 8,
          }}
        >
          <div>
            Orientation: {orientation?.x || 0}, {orientation?.y || 0}
          </div>
        </div>
      ) : null}
    </>
  );
}
