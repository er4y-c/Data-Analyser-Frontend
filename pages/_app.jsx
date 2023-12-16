import React from 'react';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../styles/global.css';
import { VisualizeProvider } from '../context/visualize';

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <VisualizeProvider>
        <Component {...pageProps} />
      </VisualizeProvider>
    </Theme>
  );
}
