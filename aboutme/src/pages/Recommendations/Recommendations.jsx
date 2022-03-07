import React, { useEffect, useState, Suspense, lazy } from 'react';
// import Slide from './components/Slide';
import axios from 'axios';
import localesService from '../../core/locales/locales.service';
import Skeleton from './components/SkeletonRecommendation';

const Recommendations = () => {
  const [requestData, setRequestData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const Slide = lazy(() => import('./components/Slide'));

  const getRecommendations = () => {
    axios.get(`https://content-manager-rt.herokuapp.com/recommendations?_locale=${localesService.getLocale()}`)
      .then((response) => {
        setRequestData(response.data);
        setIsReady(true);
      });
  }

  useEffect(() => {
    getRecommendations();
  }, []);

  if (!requestData || !isReady) {
    return (
      <section className="recommendations-page">
        <Skeleton />
      </section>
    );
  }
  return (
    <section className="recommendations-page" id="recommendations">

          <Suspense fallback={<Skeleton />}>
            <Slide data={requestData}/>
          </Suspense>
    </section>
  );
}

export default Recommendations;