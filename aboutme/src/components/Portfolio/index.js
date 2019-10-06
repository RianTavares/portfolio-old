import React from 'react';

const Portfolio = (props) => {
    return (
        <>
            <section className="portfolio">
                <div className="portfolio__img">
                    <img src={props.img} alt={props.about} />
                </div>
                <div className="portfolio__container">
                    <h2 className="portfolio__container__title">{props.ptitle}</h2>
                    <p className="portfolio__container__text">{props.ptext}</p>
                    <a href={props.purl} target="_blank" rel="noopener noreferrer">
                        <button className="portfolio__container__button">{props.pbutton}</button>
                    </a>
                </div>
            </section> 
        </>
    )
}

export default Portfolio;