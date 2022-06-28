import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Social from '../Social';
import localesService from '../../core/locales/locales.service';

const Footer = () => (
  <footer className="App__footer">
    <Social />
    <div className="social__copyright">
      {localesService.translate('footer.copyright1')}
      <FontAwesomeIcon icon={faHeart} size="1x" />
      {localesService.translate('footer.copyright2')}
    </div>
  </footer>
);

export default Footer;
