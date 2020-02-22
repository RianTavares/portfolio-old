import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Social from '../Social';
import { HashLink as Link } from 'react-router-hash-link';
import l from '../../components/LenguageSwitcher/lenguage';


function HideOnScroll(props) {
    
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {

    const [selectedLenguage, setLenguage] = useState(0);

    useEffect(()=>{
        const localStorageVar = localStorage.getItem('lenguage_rt') ? localStorage.getItem('lenguage_rt') : 0;
        setLenguage(localStorageVar);
    },[])

    const buttonWasClicked = () => { 
        const body = document.body;
        const button = document.querySelector('#button-menu');
        const slideBar = document.querySelector('#menu-slide-bar');
        let varScroll;
      
        if(!body.classList.contains('menu-open')) {
          varScroll = window.scrollY;
          body.style.top = '-' + varScroll + 'px';
          body.dataset.y = varScroll;
          button.classList.add('open');
          body.classList.add('menu-open');
          slideBar.classList.add('open-nav-transform');
        } else {
          button.classList.remove('open');
          body.classList.remove('menu-open');
          slideBar.classList.remove('open-nav-transform');
          body.style.top = 0;
          window.scrollTo(0, body.dataset.y);
        }
    }

    const keepScrolling = () => {
          const body = document.body;
          const button = document.querySelector('#button-menu');
          const slideBar = document.querySelector('#menu-slide-bar');
          
          button.classList.remove('open');
          body.classList.remove('menu-open');
          slideBar.classList.remove('open-nav-transform');
          body.style.top = 0;
    }

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <div className="menu-item">
                <button id="button-menu" className="menu-item__menu" type="button" onClick={buttonWasClicked}>
                    menu
                </button>
            </div>
            {/* Troca de língua retirada para a próxima entrega */}
            <div className="menu-item-lenguage">
                <button id="brazil" onClick={() => { setLenguage(0); localStorage.setItem('lenguage_rt', 0); window.location.reload();}}></button>
                <button id="england" onClick={() => { setLenguage(1); localStorage.setItem('lenguage_rt', 1); window.location.reload();}}></button>
                {/* <button id="germany" onClick={() => { setLenguage(2); localStorage.setItem('lenguage_rt', 2); window.location.reload();}}></button> */}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

    <div className="menu-slide-bar" id="menu-slide-bar">
        <nav className="menu-slide-bar__nav">
            <div className="menu-slide-bar__nav__items">
               <Link to="#aboutme" onClick={keepScrolling}>{l[selectedLenguage].menu.item1}</Link>
               {/* <Link to="#posts" onClick={keepScrolling}>Posts</Link> */}
               <Link to="#jobs" onClick={keepScrolling}>{l[selectedLenguage].menu.item3}</Link>
               <Link to="#education" onClick={keepScrolling}>{l[selectedLenguage].menu.item4}</Link>
               <Link to="#skills" onClick={keepScrolling}>{l[selectedLenguage].menu.item5}</Link>
               <Link to="#portfolio" onClick={keepScrolling}>{l[selectedLenguage].menu.item6}</Link>
            </div>

        </nav>
        <footer className="menu-slide-bar__footer">
            <Social />
        </footer>
    </div>
    </React.Fragment>
  );
}