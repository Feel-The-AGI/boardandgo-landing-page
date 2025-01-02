import { useScrollPosition } from '../hooks/useScrollPosition';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useScrollPosition();

  return <Component {...pageProps} />;
}

export default MyApp;
