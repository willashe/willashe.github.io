'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import styles from './components.module.css';

type BannerBgProps = {
  debug?: boolean;
};

export default function BannerBg({ debug }: BannerBgProps) {
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
        className={styles['banner-bg']}
        style={{
          animation: orientation ? 'none' : undefined,
          backgroundPositionX: orientation
            ? `${Math.round((orientation.y + 45) * (100 / 90))}%`
            : undefined,
        }}
      />
      {debug ? (
        <div>
          {orientation?.x || 0}, {orientation?.y || 0}
        </div>
      ) : null}
    </>
  );
}
