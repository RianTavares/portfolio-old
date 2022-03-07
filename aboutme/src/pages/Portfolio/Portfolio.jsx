import React, { useEffect, useState, Suspense, lazy } from 'react';
import axios from 'axios';

import Loading from '../../components/JobsSlide/components/Loading';
// import JobsSlide from '../../components/JobsSlide';
import localesService from '../../core/locales/locales.service';

const Portfolio = () => {
  const [requestData, setRequestData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const JobsSlide = lazy(() => import('../../components/JobsSlide'));

  const getProjects = () => {
    axios.get(`https://content-manager-rt.herokuapp.com/projects?_locale=${localesService.getLocale()}&_sort=id:DESC`)
      .then((response) => {
        setRequestData(response.data);
        setIsReady(true);
      });
  }

  useEffect(() => {
    getProjects();
  }, []);

  if (!isReady || !requestData) {
    return (
      <section className="portfolio" id="portfolio">
        <section className="portfolio__content">
          <div className="portfolio__header">
            <p className="portfolio__pre-title">Projetos e soluções desenvolvidas</p>
            <h1 className="portfolio__title"> Portfolio </h1>
          </div>
          <Loading />
        </section>
      </section>
    )
  }

  return (
    <section className="portfolio" id="portfolio">
      <section className="portfolio__content">
        <div className="portfolio__header">
          <p className="portfolio__pre-title">Projetos e soluções desenvolvidas</p>
          <h1 className="portfolio__title"> Portfolio </h1>
        </div>
        <Suspense fallback={<Loading />}>
          <JobsSlide data={requestData} />
        </Suspense>
      </section>
    </section>
  )
}

export default Portfolio;