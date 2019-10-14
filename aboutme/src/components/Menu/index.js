import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Social from '../Social';
import { Link } from 'react-router-dom';

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
      
        if(body.classList.contains('foto-open')) {
          body.classList.remove('foto-open');
          body.style.top = 0;
        }
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
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

    <div className="menu-slide-bar" id="menu-slide-bar">
        <nav className="menu-slide-bar__nav">
            <div className="menu-slide-bar__nav__items">
               <a>Quem Sou Eu</a>
               <a>Posts</a>
               <a>Experiências</a>
               <a>Educação</a>
               <a>Habilidade</a>
            </div>

        </nav>
        <footer className="menu-slide-bar__footer">
            <Social />
        </footer>
    </div>
    </React.Fragment>
  );
}