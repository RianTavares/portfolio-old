import React from 'react';
import Social from '../../components/Social';
import localesService from '../../core/locales/locales.service';

const AboutMe = () => (
  <section className="aboutme-page" id="aboutme">
    <div className="section__desk">
      <div className="section__desk__img">
        <div className="section__shape">
          <div className="section__shape--overlay" />
        </div>
      </div>
      <div className="section__desk__container">
        <h1 className="whoami">{localesService.translate('aboutMe.title')}</h1>
        <p className="section__desk__container__text">{localesService.translate('aboutMe.text')}</p>
        <p className="section__desk__container__text">{localesService.translate('aboutMe.social')}</p>
        <Social />
      </div>
    </div>
  </section>
);

export default AboutMe;
