import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme.ts';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider
      toastOptions={{
        defaultOptions: { position: 'top-right', duration: 3000, variant: 'solid' },
      }}
      theme={theme}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
