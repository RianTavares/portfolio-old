import React from 'react';
import JobsSlide from '../../components/JobsSlide';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <section className="portfolio__content">
        <div className="portfolio__header">
          <p className="portfolio__pre-title">Projetos e soluções desenvolvidas</p>
          <h1 className="portfolio__title"> Portfolio </h1>
        </div>
        <JobsSlide />
      </section>
    </section>
  )
}

export default Portfolio;