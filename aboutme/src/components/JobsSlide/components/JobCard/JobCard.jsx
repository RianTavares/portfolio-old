import React, { useState, useEffect } from "react";
import teste from '../../../../assets/imgs/portfolio-mockup-test.jpg';

const JobsCard = () => {

  return (
    <div className="card">
      <img src={teste} alt="teste" className="card__image" />

      <div className="card__info-container">
        <div className="card__info">
          <p className="card__title">Rodobravo Transportes</p>

          <div className="card__tags-container">
            <div className="card__tag">
              <strong className="card__tag-text">React JS</strong>
            </div>
            <div className="card__tag">
              <strong className="card__tag-text">Aplicação web</strong>
            </div>
          </div>

          <button className="card__button">
            Veja mais detalhes do projeto
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobsCard;