'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// import styles from './testcomponents.module.css';

type BgBannerProps = {
  debug?: boolean;
};

export default function TestBgBanner({ debug }: BgBannerProps) {
  const [orientation, setOrientation] = useState<{
    x: number;
    y: number;
  } | null>();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;

    if (node) {
      node.style.top = 'calc(50svh - 200px)';
    }
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
        ref={ref}
        style={{
          position: 'absolute',
          top: 'calc(50svh - 200px)',
          height: 400,
          width: '100%',
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
