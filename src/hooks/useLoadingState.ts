import { useState, useEffect } from 'react';
import { CONFIG } from '@/constants/config';

interface UseLoadingStateProps {
  delay?: number;
}

export const useLoadingState = ({ delay = CONFIG.LOADING_DELAY }: UseLoadingStateProps = {}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isLoading };
};