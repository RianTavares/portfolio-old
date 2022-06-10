import React from 'react';
import profile from '../../assets/imgs/profile-pic.jpeg';

const Bio = () => {
  return (
    <section className="App">
      <section className="bio-page">

        <header className="bio-page__header">
          <img src={profile} className="bio-page__profile-pic" alt='Profile'/>
          <hgroup>
            <h1 className="bio-page__title">Rian Tavares</h1>
          </hgroup>
        </header>

        <main className="bio-page__content">
          <div className='bio-page__menu'>
            <a className='bio-page__link bio-page__link-portfolio' href="https://www.riantavares.dev/" rel="noreferrer" target="_blank">
              Portfolio
            </a>
          </div>

          <h2 className='bio-page__subtitle'>Redes Sociais</h2>
          <div className='bio-page__social-media'>
            <a className='bio-page__link bio-page__link-insta' href="https://www.instagram.com/riantavares.dev/" rel="noreferrer" target="_blank">
              Instagram
            </a>
            <a className='bio-page__link bio-page__link-twitter' href="https://twitter.com/RianTavaresDev" rel="noreferrer" target="_blank">
              Twitter
            </a>
            <a className='bio-page__link bio-page__link-linkedin' href="https://www.linkedin.com/in/riantavares/" rel="noreferrer" target="_blank">
              Linkedin
            </a>
            <a className='bio-page__link bio-page__link-github' href="https://github.com/RianTavares" rel="noreferrer" target="_blank">
              GitHub
            </a>
          </div>
        </main>

      </section>
    </section>
  )
}

export default Bio;