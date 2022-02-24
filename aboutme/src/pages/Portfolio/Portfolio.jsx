import React from 'react';
import JobsSlide from '../../components/JobsSlide';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <section className="portfolio__content">
        <h1 className="portfolio__title"> Portfolio </h1>
        <JobsSlide />
      </section>
    </section>
  )
}

export default Portfolio;