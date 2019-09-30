import React, {useState} from "react";
import BannerTop from '../components/Banner';
import l from '../components/LenguageSwitcher/lenguage';
import eu from '../assets/imgs/rian-tavares.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [selectedLenguage, setLenguage] = useState(0);

  return (
    <div className="App">
      <BannerTop />
      <section className="page-content">
        {/* <button onClick={() => setLenguage(0)}>PORTUGUÊS</button>
        <button onClick={() => setLenguage(1)}>INGLÊS</button>
        <button onClick={() => setLenguage(2)}>ALEMÃO</button> */}
        
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
    </div>
  );
}

export default App;
