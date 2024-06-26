import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

function SpendWisely({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default SpendWisely;
