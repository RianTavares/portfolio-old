/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import i18n from 'i18n-js';

import DataInitializer from './components/DataInitializer';
import Routes from './routes';
import themes from './themes';
import en from './core/locales/en';
import pt from './core/locales/pt-BR';

import 'react-lazy-load-image-component/src/effects/blur.css';

i18n.fallbacks = true;
i18n.defaultLocale = 'en';
i18n.translations = {
  en,
  pt,
  'pt-BR': pt,
  'pt-br': pt,
};

function App() {
  const selectedTheme = themes.light;

  return (
    <ThemeProvider theme={selectedTheme}>
      <DataInitializer>
        <Routes />
      </DataInitializer>
    </ThemeProvider>
  );
}

export default App;
