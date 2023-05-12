/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Social from '../Social';
import localesService from '../../core/locales/locales.service';

import brazil from '../../assets/imgs/flags/brazil.png';
import us from '../../assets/imgs/flags/us.png';

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
  const [localeOption, setLocaleOption] = React.useState(localesService.getLocale());

  const buttonWasClicked = () => {
    const { body } = document;
    const button = document.querySelector('#button-menu');
    const slideBar = document.querySelector('#menu-slide-bar');
    let varScroll;

    if (!body.classList.contains('menu-open')) {
      varScroll = window.scrollY;
      body.style.top = `-${varScroll}px`;
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
  };

  const keepScrolling = () => {
    const { body } = document;
    const button = document.querySelector('#button-menu');
    const slideBar = document.querySelector('#menu-slide-bar');

    button.classList.remove('open');
    body.classList.remove('menu-open');
    slideBar.classList.remove('open-nav-transform');
    body.style.top = 0;
  };

  const settingLocale = (locale) => {
    localStorage.setItem('locale@riantavares', locale);
    window.location.reload();
  };

  const handleLocaleChange = (event) => {
    const { value } = event.target;
    setLocaleOption(value);
    settingLocale(value);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <div className="menu-item">
              <button id="button-menu" className="menu-item__menu" type="button" onClick={buttonWasClicked}>
                menu
              </button>
            </div>

            <section className="menu__language-switch">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={localeOption}
                sx={{
                  background: 'rgba(0, 0, 0, .1)',
                  borderRadius: 24,
                  height: 37,
                }}
                onChange={handleLocaleChange}
              >
                <MenuItem value="pt-BR">
                  <img src={brazil} alt="teste" />
                </MenuItem>
                <MenuItem value="en">
                  <img src={us} alt="teste" />
                </MenuItem>
              </Select>
            </section>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <div className="menu-slide-bar" id="menu-slide-bar">
        <nav className="menu-slide-bar__nav">
          <div className="menu-slide-bar__nav__items">
            <Link to="/#aboutme" onClick={keepScrolling}>{localesService.translate('nav.aboutme')}</Link>
            <Link to="/#whatido" onClick={keepScrolling}>{localesService.translate('nav.whatIDo')}</Link>
            <Link to="/#recommendations" onClick={keepScrolling}>{localesService.translate('nav.recommendations')}</Link>
            <Link to="/#portfolio" onClick={keepScrolling}>{localesService.translate('nav.portfolio')}</Link>
          </div>

        </nav>
        <footer className="menu-slide-bar__footer">
          <Social />
        </footer>
      </div>
    </>
  );
}
