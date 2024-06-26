import type { AppProps } from 'next/app';
import '@/src/styles/globals.css';


function SpendWisely({ Component, pageProps }: AppProps) {
  // FR Votre logique personnalisée ici
  // EN Your personalised logic here

  return <Component {...pageProps} />;
}

export default SpendWisely;
