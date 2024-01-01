import '@/styles/globals.css';
import { AppProps } from 'next/app';
import MainLayout from '@/components/layout/main-layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
