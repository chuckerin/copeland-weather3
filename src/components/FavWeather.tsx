import { useEffect } from 'react';

function FavWeather() {
  // Effect to log a message only once on mount
  useEffect(() => {
    console.log('Component mounted!');
    return () => {
      console.log('Component unmounted!'); // Cleanup function
    };
  }, []); // Runs only once on initial mount and cleanup on unmount

  return <>All the time</>;
}

export default FavWeather;
