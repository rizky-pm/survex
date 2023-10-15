import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import globalStyles from './styles/global-styles.ts';
import muiTheme from './styles/mui-theme.ts';
import theme from './styles/theme.ts';
import router from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderEmotion theme={theme}>
      <ThemeProvider theme={muiTheme}>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeProviderEmotion>
  </React.StrictMode>
);
