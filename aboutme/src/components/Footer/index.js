import React, {useState ,useEffect} from 'react';
import l from '../LenguageSwitcher/lenguage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [selectedLenguage, setLenguage] = useState(0);

    useEffect(() => {
        const localStorageVar = localStorage.getItem('lenguage_rt') ? localStorage.getItem('lenguage_rt') : 0;
        setLenguage(localStorageVar);
    })

    return (
        <>
            <footer>
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

                <div className="social__copyright">{l[selectedLenguage].footer.textStart} <FontAwesomeIcon icon={faHeart} size="1x" /> {l[selectedLenguage].footer.textEnd}</div>
            </footer>
        </>

    );
}

export default Footer;