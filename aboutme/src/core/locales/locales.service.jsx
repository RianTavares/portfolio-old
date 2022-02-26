import i18n from 'i18n-js';

const translate = (scope) =>
  i18n.t(scope);

const getLocale = () => {
  const localStorageVar = localStorage.getItem('locale@riantavares');
  return localStorageVar || 'en';
}

export default {
  translate,
  getLocale,
};