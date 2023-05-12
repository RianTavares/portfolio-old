import React from 'react';

import appleBadge from '../../../../assets/imgs/apple-store-badge.png';
import googleBadge from '../../../../assets/imgs/google-play-badge.png';
import { GhostButton } from '../../../../ui/general';

const RenderExampleButton = (props) => {
  const { requestData } = props;

  if (!requestData.ios && !requestData.android && !requestData.web) return null;

  if (requestData.ios && requestData.android) {
    return (
      <>
        <a href={requestData.ios_url} target="_blank" rel="noreferrer">
          <img className="project-header__badge" src={appleBadge} alt="Download on Apple Store" />
        </a>
        <a href={requestData.android_url} target="_blank" rel="noreferrer">
          <img className="project-header__badge" src={googleBadge} alt="Download on google play" />
        </a>
      </>
    );
  }

  if (requestData.ios) {
    return (
      <a href={requestData.ios_url} target="_blank" rel="noreferrer">
        <img className="project-header__badge" src={appleBadge} alt="Download on Apple Store" />
      </a>
    );
  }

  if (requestData.android) {
    return (
      <a href={requestData.android_url} target="_blank" rel="noreferrer">
        <img className="project-header__badge" src={googleBadge} alt="Download on google play" />
      </a>
    );
  }

  return (<GhostButton url={requestData.web_url} />);
};

export default RenderExampleButton;
