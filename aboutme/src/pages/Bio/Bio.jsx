import React, { useState, useEffect } from 'react';
import axios from 'axios';

import profile from '../../assets/imgs/profile-pic.jpeg';
import Loading from '../../components/JobsSlide/components/Loading';

const Bio = () => {
  const [requestData, setRequestData] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const getBioData = () => {
    axios.get('https://content-manager-rt.herokuapp.com/bios?_locale=en')
      .then((response) => {
        setRequestData(response.data[0]);
        setIsReady(true);
      });
  };

  useEffect(() => {
    getBioData();
  }, []);

  if (!isReady || !requestData) {
    return (
      <section className="App">
        <section className="bio-page">
          <Loading />
        </section>
      </section>
    );
  }

  return (
    <section className="App">
      <section className="bio-page">

        <header className="bio-page__header">
          <img src={profile} className="bio-page__profile-pic" alt="Profile" />
          <hgroup>
            <h1 className="bio-page__title">{requestData.title}</h1>
          </hgroup>
        </header>

        <main className="bio-page__content">
          <div className="bio-page__menu">
            {requestData.buttons.map((button) => (
              !button.social_media && (
                <a key={button.id} className={`bio-page__link bio-page__link-${button.type}`} href={button.url} rel="noreferrer" target="_blank">
                  {button.title}
                </a>
              )
            ))}
          </div>

          <h2 className="bio-page__subtitle">Redes Sociais</h2>
          <div className="bio-page__social-media">
            {requestData.buttons.map((button) => (
              button.social_media && (
                <a key={button.id} className={`bio-page__link bio-page__link-${button.type}`} href={button.url} rel="noreferrer" target="_blank">
                    {button.title}
                </a>
              )
            ))}
          </div>
        </main>

      </section>
    </section>
  );
};

export default Bio;
