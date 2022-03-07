import React from "react";
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import i18n from 'i18n-js';

import DataInitializer from "./components/DataInitializer";
import store from './store';
import Routes from './routes';
import themes from './themes';
import en from './core/locales/en';
import pt from './core/locales/pt-BR';

import 'react-lazy-load-image-component/src/effects/blur.css';
i18n.translations = {
  en,
  pt,
  'pt-BR': pt,
};

function App() {
  const selectedTheme =  themes['light'];
  return (
    <Provider store={store}>
      <ThemeProvider theme={selectedTheme}>
        <DataInitializer>
          <Routes />
        </DataInitializer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
