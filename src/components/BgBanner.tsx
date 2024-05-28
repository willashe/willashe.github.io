'use client';

import { useCallback, useEffect, useState } from 'react';

import styles from './testcomponents.module.css';

type BgBannerProps = {
  debug?: boolean;
};

export default function TestBgBanner({ debug }: BgBannerProps) {
  const [orientation, setOrientation] = useState<{
    x: number;
    y: number;
  } | null>();

  const callbackRef = useCallback((node: HTMLDivElement) => {
    node.style.top = `${window.innerHeight / 2}px`;
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
      <div ref={callbackRef} className={styles['bg-banner']} />
      {debug ? (
        <div>
          <div>
            Orientation: {orientation?.x || 0}, {orientation?.y || 0}
          </div>
        </div>
      ) : null}
    </>
  );
}
