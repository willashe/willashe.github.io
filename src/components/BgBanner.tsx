'use client';

import { useCallback, useEffect, useState } from 'react';

// import styles from './testcomponents.module.css';

type BgBannerProps = {
  debug?: boolean;
};

export default function TestBgBanner({ debug }: BgBannerProps) {
  const [orientation, setOrientation] = useState<{
    x: number;
    y: number;
  } | null>();
  const callbackRef = useCallback((node: HTMLDivElement) => {
    console.log(node);
    node.style.opacity = '100';
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
        ref={callbackRef}
        style={{
          opacity: 0,
          transition: 'opacity 1s ease-in-out',
          position: 'relative',
          top: '50svh',
          transform: 'translateY(-50%)',
          height: 400,
          width: '100%',
          background: 'red',
        }}
      >
        test3
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
