import React, { Suspense, lazy } from 'react';
import BannerImageBlur from './BannerImageBlur';

const Banner = () => {
  const BannerImage = lazy(() => import('./BannerImage'));

  return (
    <header className="page-header">
      <div className="mackbook" />
      <div className="logo" />
      <div className="mask" />
      <div className="overlay" />
      <Suspense fallback={<BannerImageBlur />}>
        <BannerImage />
      </Suspense>
    </header>
  );
};

export default Banner;
