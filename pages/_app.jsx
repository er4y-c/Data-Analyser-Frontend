import React from 'react';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../styles/global.css';
import { VisualizeProvider } from '../context/visualize';
import { AuthProvider } from '../context/auth';

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <AuthProvider>
          <VisualizeProvider>
            <Component {...pageProps} />
          </VisualizeProvider>
      </AuthProvider>
    </Theme>
  );
}
