'use client';

import { useEffect, useState } from 'react';

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedVal, setDebouncedVal] = useState<T>(value);

  useEffect(() => {
    var timer = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedVal;
}
