'use client';

import {
  // useCallback,
  useEffect,
  useState,
} from 'react';

// import styles from './testcomponents.module.css';

type BgBannerProps = {
  debug?: boolean;
};

export default function TestBgBanner({ debug }: BgBannerProps) {
  // const [top, setTop] = useState<number | null>(null);
  const [orientation, setOrientation] = useState<{
    x: number;
    y: number;
  } | null>();

  // const callbackRef = useCallback((node: HTMLDivElement) => {
  //   console.log(node);
  //   console.log(window.innerHeight);
  //   node.style.top = `${window.innerHeight / 2}px`;

  //   const rect = node.getBoundingClientRect();
  //   setTop(rect.top);
  // }, []);

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
        // ref={callbackRef}
        style={{
          position: 'absolute',
          top: '50svh',
          transform: 'translateY(-50%)',
          height: 400,
          width: '100%',
          background: 'red',
        }}
      >
        test1
      </div>
      {/* <div className={styles['bg-banner']} /> */}
      {debug ? (
        <div>
          {/* <div>Top: {top}</div> */}
          <div>
            Orientation: {orientation?.x || 0}, {orientation?.y || 0}
          </div>
        </div>
      ) : null}
    </>
  );
}
