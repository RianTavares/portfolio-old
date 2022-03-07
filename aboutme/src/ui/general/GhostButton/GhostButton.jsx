import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import localesService from "../../../core/locales/locales.service";

const GhostButton = (props) => {
  const { url } = props;

  return (
    <a className="ghost-button" href={url} target="_blank" rel="noopener noreferrer">
      {localesService.translate('ghostButton.title')} <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
    </a>
  )
}

export default GhostButton;