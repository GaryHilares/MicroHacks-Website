import '../styles/globals.css';
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;