'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

// import styles from './testcomponents.module.css';

type BgBannerProps = {
  debug?: boolean;
};

export default function TestBgBanner({ debug }: BgBannerProps) {
  const [orientation, setOrientation] = useState<{
    x: number;
    y: number;
  } | null>();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        style={{
          display: 'flex',
          alignItems: 'center',
          top: '50svh',
          transform: 'translateY(50%)',
          height: 400,
          width: '100%',
          margin: 0,
          background: 'red',
        }}
      >
        test
      </div>
      {/* <div className={styles['bg-banner']} /> */}
      {debug ? (
        <div>
          {orientation?.x || 0}, {orientation?.y || 0}
        </div>
      ) : null}
    </>
  );
}
