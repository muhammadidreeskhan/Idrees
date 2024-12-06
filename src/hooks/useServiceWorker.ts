import { useEffect } from 'react';

export const useServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(registration => {
            console.log('ServiceWorker registration successful');
          })
          .catch(err => {
            console.error('ServiceWorker registration failed:', err);
          });
      });
    }
  }, []);
};
