import React, {useState, useEffect} from "react";
import BannerTop from '../components/Banner';
import Footer from '../components/Footer';
import l from '../components/LenguageSwitcher/lenguage';
import eu from '../assets/imgs/rian-tavares.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [selectedLenguage, setLenguage] = useState(0);

  useEffect(()=>{
    const localStorageVar = localStorage.getItem('lenguage_rt') ? localStorage.getItem('lenguage_rt') : 0;
    setLenguage(localStorageVar);
  })

  return (
    <div className="App">
      <section className="App__header">
        <div className="App__header__lenguage">
          <button id="brazil" onClick={() => { setLenguage(0); localStorage.setItem('lenguage_rt', 0)}}></button>
          <button id="england" onClick={() => { setLenguage(1); localStorage.setItem('lenguage_rt', 1)}}></button>
          <button id="germany" onClick={() => { setLenguage(2); localStorage.setItem('lenguage_rt', 2)}}></button>
        </div>
        <BannerTop />
      </section>
      <section className="page-content">
        <section className="section">
          <h1 className="section__title">{l[selectedLenguage].section1.title}</h1>
          <div className="section__img">
            <img src={eu} />
          </div>
          <div className="section__text">{l[selectedLenguage].section1.aboutme}</div>
          <div className="social">
            <a href="https://twitter.com/rian_tavares" target="_blank" rel="noopener noreferrer" alt="Twitter Rian Tavares">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/riantavares/" target="_blank" rel="noopener noreferrer" alt="Linkedin Rian Tavares">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a href="https://github.com/RianTavares" target="_blank" rel="noopener noreferrer" alt="Github Rian Tavares">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.instagram.com/riantba/" target="_blank" rel="noopener noreferrer" alt="Instagram Rian Tavares">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
