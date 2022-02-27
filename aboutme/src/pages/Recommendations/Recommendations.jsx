import React, { useEffect, useState } from 'react';
import Slide from './components/Slide/Slide';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'

import localesService from '../../core/locales/locales.service';

const SlideItem = ({text, name, position, img}) => {

  return (
    <div className="recommendations-page__content">
      <div className="recommendations-page__column">
        <img className="recommendations-page__image" src={img} alt="rodrigo" />
      </div>
      <div className="recommendations-page__column">
        <img className="recommendations-page__quote" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjknIGhlaWdodD0nMjEnIHZpZXdCb3g9JzAgMCAyOSAyMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTIuOTEyNCAzLjYzOTUzQzkuNjc5MzggNC4wNDY1MSA3LjEzOTE4IDUuNzMyNTYgNy4xMzkxOCA4LjA1ODE0QzcuMTM5MTggMTEuMzE0IDEyLjczOTIgMTAuMzgzNyAxMi43MzkyIDE1LjI2NzRDMTIuNzM5MiAxOC4wNTgxIDEwLjMxNDQgMjAuNTU4MSA3LjEzOTE4IDIwLjU1ODFDMi45MjQ3NCAyMC41IDAuNSAxNy4zMDIzIDAuNSAxMy4wNTgxQzAuNSA3LjQxODYgNC43NzIxNyAxLjEzOTUzIDEyLjkxMjQgMC41VjMuNjM5NTNaTTI4LjUgMy42Mzk1M0MyNS4yNjcgNC4wNDY1MSAyMi43MjY4IDUuNzMyNTYgMjIuNzI2OCA4LjA1ODE0QzIyLjcyNjggMTEuMzE0IDI4LjM4NDUgMTAuMzgzNyAyOC4zODQ1IDE1LjI2NzRDMjguMzg0NSAxOC4wNTgxIDI1LjkwMjEgMjAuNTU4MSAyMi43MjY4IDIwLjU1ODFDMTguNTcwMSAyMC41NTgxIDE2LjE0NTQgMTcuMzYwNSAxNi4xNDU0IDEzLjExNjNDMTYuMTQ1NCA3LjQ3Njc0IDIwLjQxNzUgMS4xOTc2NyAyOC40NDIzIDAuNTU4MTRWMy42Mzk1M0gyOC41WicgZmlsbD0nd2hpdGUnLz48L3N2Zz4K" alt="quote" />
        <p className="recommendations-page__text">
          {`"${text}"`}
        </p>
        <p className="recommendations-page__name">{name}</p>
        <p className="recommendations-page__position">{position}</p>
      </div>
    </div>
  );
}

const Recommendations = () => {
  const [requestData, setRequestData] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const getRecommendations = () => {
    axios.get(`https://content-manager-rt.herokuapp.com/recommendations?_locale=${localesService.getLocale()}`)
    .then((response)=> {
      setRequestData(response.data);
      setIsReady(true);
    });
  }

  useEffect(() => {
    getRecommendations();
  }, []);

  if(!requestData || !isReady) {
    return (
      <section className="recommendations-page">
        <div className="recommendations-page__content">
          <div className="recommendations-page__column">
            <Skeleton width="200px" height="200px" circle baseColor="#767273" highlightColor="#868585" />
          </div>
          <div className="recommendations-page__column"  style={{paddingTop: 39}}>
            <Skeleton count={5} baseColor="#767273" highlightColor="#868585" />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="recommendations-page">
      <Slide>
        {requestData.map((item) => (
          <SlideItem 
            key={item.id}
            text={item.recommendation}  
            name={item.name}
            position={item.position}
            img={item.profile_picture.url}
          />
        ))}
      </Slide>
    </section>
  );
}

export default Recommendations;