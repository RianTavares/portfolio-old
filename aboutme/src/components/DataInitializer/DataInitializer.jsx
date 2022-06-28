/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';

const DataInitializer = (props) => {
  const { children } = props;
  const [isReady, setIsReady] = useState(false);

  const checkBrowserLocale = (locale) => {
    if (locale.includes('en')) {
      return 'en';
    }

    if (locale.includes('pt')) {
      return 'pt-BR';
    }

    return 'en';
  };

  const getStorageLocale = async () => {
    const localStorageVar = await localStorage.getItem('locale@riantavares');

    i18n.locale = localStorageVar;
    if (localStorageVar) setIsReady(true);
  };
  const checkStorageLocale = () => {
    const browserLocale = navigator.language;
    const storageLocale = localStorage.getItem('locale@riantavares');

    if (!storageLocale && browserLocale) {
      const locale = checkBrowserLocale(browserLocale);
      localStorage.setItem('locale@riantavares', locale);
    }

    if (!storageLocale && !browserLocale) {
      localStorage.setItem('locale@riantavares', 'en');
    }

    getStorageLocale();
  };

  useEffect(() => {
    checkStorageLocale();
  }, []);

  return (
    <>
      {isReady && children }
    </>
  );
};

export default DataInitializer;
