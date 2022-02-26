import React from 'react';

//Project components
import BannerTop from '../../components/Banner';
import Footer from '../../components/Footer';
import Menu from "../../components/Menu";
import Portfolio from "../Portfolio";
import AboutMe from '../AboutMe';
import Services from '../Services';
import Recommendations from '../Recommendations';

const Main = () => {

  return (
    <section className="App">
    <section className="App__header">
      <Menu />
      <BannerTop />
    </section>
    <section className="page-content">
      <AboutMe />
      <Services />
      <Recommendations />
      <Portfolio />
    </section>
    <Footer />
  </section>
  )
}

export default Main;