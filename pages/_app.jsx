import React from 'react';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../styles/global.css';
import { VisualizeProvider } from '../context/visualize';
import { AuthProvider } from '../context/auth';
import { ModelProvider } from '../context/model';

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <AuthProvider>
          <VisualizeProvider>
            <ModelProvider>
              <Component {...pageProps} />
            </ModelProvider>
          </VisualizeProvider>
      </AuthProvider>
    </Theme>
  );
}
