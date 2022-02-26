import React from 'react';

import web from '../../assets/imgs/web-app-icon.png';
import mobile from '../../assets/imgs/mobile-app-icon.png';

const Services = () => {
  return (
    <section className="service-page">
      <div className="service-page__content">
        <p className="service-page__pre-title">SISTEMAS WEB E APLICATIVOS</p>
        <h1 className="service-page__title">O que eu faço</h1>
        <p>
          Dou vida a sistemas web e aplicações móveis criando interfaces totalmente integradas, 
          moldando a forma como as pessoas interagem com as aplicações.
        </p>
        <div className="service-page__items">
          <div className="service-page__info">
            <img className="service-page__icon" src={web} alt="teste" />
            <p className="service-page__icon-description">Aplicações web amigáveis, responsivas e rápidas</p>
          </div>
          <div className="service-page__info">
            <img className="service-page__icon" src={mobile} alt="teste" />
            <p className="service-page__icon-description">Aplicativos móveis híbridos IOS e Android</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;