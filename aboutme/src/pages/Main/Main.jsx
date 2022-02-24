import React from 'react';

//Project components
import BannerTop from '../../components/Banner';
import Footer from '../../components/Footer';
import Portfolio from "../Portfolio";
import AboutMe from '../AboutMe';
import Menu from "../../components/Menu";

const Main = () => {

  return (
    <div className="App">
    <section className="App__header">
      <Menu />
      <BannerTop />
    </section>
    <section className="page-content">
      <AboutMe />

      <Portfolio>
      </Portfolio>
    </section>
    {/* <Footer /> */}
  </div>
  )
}

export default Main;