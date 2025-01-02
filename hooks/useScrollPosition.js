import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useScrollPosition() {
  const router = useRouter();

  useEffect(() => {
    // Load scroll position on page load
    const savedPosition = sessionStorage.getItem(`scroll_${router.asPath}`);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }

    // Save scroll position on route change or beforeunload
    const handleScroll = () => {
      sessionStorage.setItem(`scroll_${router.asPath}`, window.scrollY.toString());
    };

    // Throttle scroll events
    let timeoutId;
    const throttledHandleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    window.addEventListener('beforeunload', handleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('beforeunload', handleScroll);
    };
  }, [router.asPath]);
} 