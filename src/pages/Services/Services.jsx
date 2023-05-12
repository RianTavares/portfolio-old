import React from 'react';

import web from '../../assets/imgs/web-app-icon.png';
import mobile from '../../assets/imgs/mobile-app-icon.png';
import localesService from '../../core/locales/locales.service';

const Services = () => (
  <section className="service-page" id="whatido">
    <div className="service-page__content">
      <p className="service-page__pre-title">{localesService.translate('services.preTitle')}</p>
      <h1 className="service-page__title">{localesService.translate('services.title')}</h1>
      <p>{localesService.translate('services.description')}</p>
      <div className="service-page__items">
        <div className="service-page__info">
          <img className="service-page__icon" src={web} alt="teste" />
          <p className="service-page__icon-description">{localesService.translate('services.web.description')}</p>
        </div>
        <div className="service-page__info">
          <img className="service-page__icon" src={mobile} alt="teste" />
          <p className="service-page__icon-description">{localesService.translate('services.app.description')}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
