'use client';

import { useCallback, useEffect, useState } from 'react';

import styles from './components.module.scss';

type BgBannerProps = {
  debug?: boolean;
};

export default function TestBgBanner({ debug }: BgBannerProps) {
  const [orientation, setOrientation] = useState<{
    x: number;
    y: number;
  } | null>();

  // TODO: revisit this...hack to fix android chrome bug that has problems with svh on fresh tab page load
  const callbackRef = useCallback((node: HTMLDivElement) => {
    const handleResize = () => {
      node.style.top = `${window.innerHeight / 2}px`;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
