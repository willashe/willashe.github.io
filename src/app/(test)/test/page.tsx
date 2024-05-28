'use client';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skillset from '@/components/Skillset';
import { useCallback } from 'react';

import styles from './page.module.css';

export default function Home() {
  // TODO: revisit this...hack to fix android chrome bug that has problems with svh on fresh tab page load
  const callbackRef = useCallback((node: HTMLDivElement) => {
    node.style.height = `${window.innerHeight}px`;

    setTimeout(() => {
      node.style.height = '100svh';
    }, 1);
  }, []);

  return (
    <div ref={callbackRef} className={styles.home}>
      <Hero />
      <div className={styles['right-container']}>
        <Skillset />
        <Projects />
      </div>
    </div>
  );
}
