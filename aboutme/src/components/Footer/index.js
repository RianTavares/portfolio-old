import React, {useState ,useEffect} from 'react';
import l from '../LenguageSwitcher/lenguage';
import Social from '../Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [selectedLenguage, setLenguage] = useState(0);

    useEffect(() => {
        const localStorageVar = localStorage.getItem('lenguage_rt') ? localStorage.getItem('lenguage_rt') : 0;
        setLenguage(localStorageVar);
    },[])

    return (
        <>
            <footer>
                <Social />
                <div className="social__copyright">{l[selectedLenguage].footer.textStart} <FontAwesomeIcon icon={faHeart} size="1x" /> {l[selectedLenguage].footer.textEnd}</div>
            </footer>
        </>

    );
}

export default Footer;