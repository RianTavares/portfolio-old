import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram, faLinkedinIn, faTwitter, faGithub, faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Social = () => (
  <div className="social">
    <a href="https://twitter.com/RianTavaresDev" target="_blank" rel="noopener noreferrer" alt="Twitter Rian Tavares">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="https://www.linkedin.com/in/riantavares/" target="_blank" rel="noopener noreferrer" alt="Linkedin Rian Tavares">
      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
    </a>
    <a href="https://github.com/RianTavares" target="_blank" rel="noopener noreferrer" alt="Github Rian Tavares">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a href="https://www.instagram.com/riantavares.dev/" target="_blank" rel="noopener noreferrer" alt="Instagram Rian Tavares">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a href="https://www.youtube.com/c/SpeakUpTech" target="_blank" rel="noopener noreferrer" alt="Youtube Rian Tavares">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
  </div>
);

export default Social;
