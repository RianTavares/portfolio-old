import React, { useEffect, useState } from 'react';
import i18n from "i18n-js";

const DataInitializer = (props) => {
  const { children } = props;
  const [isReady, setIsReady] = useState(false);

  const checkStorageLocale = () => {
    const browserLocale = navigator.language;
    const storageLocale = localStorage.getItem('locale@riantavares');
    if (!storageLocale && browserLocale) {
      localStorage.setItem('locale@riantavares', browserLocale);
    }
    if (!storageLocale && !browserLocale) {
      localStorage.setItem('locale@riantavares', 'en');
    }
  }

  const getStorageLocale = async () => {
    const localStorageVar = await localStorage.getItem('locale@riantavares');
    i18n.locale = localStorageVar;
    setIsReady(true);
  }

  useEffect(() => {
    checkStorageLocale();
    getStorageLocale();
  }, [])

  return (<>{isReady && children}</>)
}

export default DataInitializer;