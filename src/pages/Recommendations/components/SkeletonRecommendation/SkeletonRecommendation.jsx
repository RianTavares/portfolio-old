import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonRecommendation = () => (
  <div className="recommendations-page__content">
    <div className="recommendations-page__column">
      <Skeleton width="200px" height="200px" circle baseColor="#767273" highlightColor="#868585" />
    </div>
    <div className="recommendations-page__column" style={{ paddingTop: 39 }}>
      <Skeleton count={5} baseColor="#767273" highlightColor="#868585" />
    </div>
  </div>
);

export default SkeletonRecommendation;
