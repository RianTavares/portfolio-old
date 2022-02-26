import React from 'react';
import Social from '../Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import localesService from '../../core/locales/locales.service';

const Footer = () => {
    return (
        <footer className="App__footer">
            <Social />
            <div className="social__copyright">
                {localesService.translate('footer.copyright1')}
                <FontAwesomeIcon icon={faHeart} size="1x" />
                {localesService.translate('footer.copyright2')}
            </div>
        </footer>
    );
}

export default Footer;