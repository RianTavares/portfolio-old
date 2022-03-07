import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Social from '../Social';
import localesService from '../../core/locales/locales.service';



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

    const settingLocale = (locale) => {
      localStorage.setItem('locale@riantavares', locale); 
      window.location.reload();
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
            {/* TODO - German support lenguage */}
            <div className="menu-item-lenguage">
                <button id="brazil" onClick={() => settingLocale('pt-BR')}></button>
                <button id="england" onClick={() => settingLocale('en')}></button>
                {/* <button id="germany" onClick={() => { setLenguage(2); localStorage.setItem('lenguage_rt', 2); window.location.reload();}}></button> */}
            </div> 
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

    <div className="menu-slide-bar" id="menu-slide-bar">
        <nav className="menu-slide-bar__nav">
            <div className="menu-slide-bar__nav__items">
               <Link to="/#aboutme" onClick={keepScrolling}>{localesService.translate("nav.aboutme")}</Link>
               <Link to="/#whatido" onClick={keepScrolling}>{localesService.translate("nav.whatIDo")}</Link>
               <Link to="/#recommendations" onClick={keepScrolling}>{localesService.translate("nav.recommendations")}</Link>
               <Link to="/#portfolio" onClick={keepScrolling}>{localesService.translate("nav.portfolio")}</Link>
            </div>

        </nav>
        <footer className="menu-slide-bar__footer">
            <Social />
        </footer>
    </div>
    </React.Fragment>
  );
}