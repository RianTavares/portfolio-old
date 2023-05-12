import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobsCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/project/${slug}`);
  };

  return (
    <div className="card">
      <img src={data.case.url} alt={data.case.alternativeText} className="card__image" />

      <div className="card__info-container">
        <div className="card__info">
          <p className="card__title">{data.name}</p>

          <div className="card__tags-container">
            {data.tags.map((item) => (
              <div className="card__tag" key={item.id}>
                <strong className="card__tag-text">{item.tag_name}</strong>
              </div>
            ))}
          </div>

          <button type="button" className="card__button" onClick={() => handleClick(data.slug)}>
            {data.see_more_button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
