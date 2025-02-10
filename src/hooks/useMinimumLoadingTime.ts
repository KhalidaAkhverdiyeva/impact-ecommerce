import { useEffect, useState } from 'react';

export const useMinimumLoadingTime = (minimumLoadingTime: number = 2000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadingTime);

    return () => clearTimeout(timer);
  }, [minimumLoadingTime]);

  return isLoading;
}; 