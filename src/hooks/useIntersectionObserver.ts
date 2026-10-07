import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = () => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasIntersected(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasIntersected(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '50px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return { ref, hasIntersected };
};
