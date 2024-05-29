'use client';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skillset from '@/components/Skillset';
import {
  useCallback, // useEffect, useRef,
  useState,
} from 'react';

import styles from './page.module.css';

export default function Home() {
  // const ref = useRef<HTMLDivElement>(null);

  const [resizeRan, setResizeRan] = useState<boolean>(false);
  const [height, setHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // TODO: revisit this...hack to fix android chrome bug that has problems with svh on fresh tab page load
  const callbackRef = useCallback((node: HTMLDivElement) => {
    const handleResize = () => {
      node.style.height = `${window.innerHeight}px`;

      const rect = node.getBoundingClientRect();
      setHeight(rect.height);
      setWindowHeight(window.innerHeight);

      setResizeRan(true);
    };

    addEventListener('resize', handleResize);
    handleResize();

    setTimeout(() => {
      handleResize();
    }, 100);

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const node = ref.current;

  //   if (node) {
  //     const handleResize = () => {
  //       node.style.height = `${window.innerHeight}px`;

  //       const rect = node.getBoundingClientRect();
  //       setHeight(rect.height);
  //       setWindowHeight(window.innerHeight);
  //     };

  //     addEventListener('resize', handleResize);
  //     handleResize();

  //     return () => {
  //       removeEventListener('resize', handleResize);
  //     };
  //   }
  // }, []);

  return (
    <div ref={callbackRef} className={styles.home}>
      <Hero />
      <div className={styles['right-container']}>
        <Skillset />
        <Projects />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          margin: 10,
          fontFamily: 'monospace',
          color: 'white',
          fontSize: 8,
        }}
      >
        <div>Resize Ran? {String(resizeRan)}</div>
        <div>Container Height: {height}</div>
        <div>Window Height: {windowHeight}</div>
      </div>
    </div>
  );
}
