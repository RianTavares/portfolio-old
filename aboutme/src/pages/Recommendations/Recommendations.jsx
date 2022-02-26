import React from 'react';
import Slide from './components/Slide/Slide';

import rodrigo from '../../assets/imgs/rodrigo.jpeg';

const SlideItem = () => {
  return (
    <div className="recommendations-page__content">
      <div className="recommendations-page__column">
        <img className="recommendations-page__image" src={rodrigo} alt="rodrigo" />
      </div>
      <div className="recommendations-page__column">
        <img className="recommendations-page__quote" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjknIGhlaWdodD0nMjEnIHZpZXdCb3g9JzAgMCAyOSAyMScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTIuOTEyNCAzLjYzOTUzQzkuNjc5MzggNC4wNDY1MSA3LjEzOTE4IDUuNzMyNTYgNy4xMzkxOCA4LjA1ODE0QzcuMTM5MTggMTEuMzE0IDEyLjczOTIgMTAuMzgzNyAxMi43MzkyIDE1LjI2NzRDMTIuNzM5MiAxOC4wNTgxIDEwLjMxNDQgMjAuNTU4MSA3LjEzOTE4IDIwLjU1ODFDMi45MjQ3NCAyMC41IDAuNSAxNy4zMDIzIDAuNSAxMy4wNTgxQzAuNSA3LjQxODYgNC43NzIxNyAxLjEzOTUzIDEyLjkxMjQgMC41VjMuNjM5NTNaTTI4LjUgMy42Mzk1M0MyNS4yNjcgNC4wNDY1MSAyMi43MjY4IDUuNzMyNTYgMjIuNzI2OCA4LjA1ODE0QzIyLjcyNjggMTEuMzE0IDI4LjM4NDUgMTAuMzgzNyAyOC4zODQ1IDE1LjI2NzRDMjguMzg0NSAxOC4wNTgxIDI1LjkwMjEgMjAuNTU4MSAyMi43MjY4IDIwLjU1ODFDMTguNTcwMSAyMC41NTgxIDE2LjE0NTQgMTcuMzYwNSAxNi4xNDU0IDEzLjExNjNDMTYuMTQ1NCA3LjQ3Njc0IDIwLjQxNzUgMS4xOTc2NyAyOC40NDIzIDAuNTU4MTRWMy42Mzk1M0gyOC41WicgZmlsbD0nd2hpdGUnLz48L3N2Zz4K" alt="quote" />
        <p className="recommendations-page__text">
          "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.
          Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Cevadis im ampola
          pa arma uma pindureta.Quem num gosta di mé, boa gentis num é."
        </p>
        <p className="recommendations-page__name">Rodrigo Carneiro</p>
        <p className="recommendations-page__position">Senior Frontend Developer</p>
      </div>
    </div>
  );
}

const Recommendations = () => {
  return (
    <section className="recommendations-page">
      <Slide>
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </Slide>
    </section>
  );
}

export default Recommendations;