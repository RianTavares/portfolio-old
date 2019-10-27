import React from 'react';
import Media from "react-media";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = (props) => {
    console.log(props.purl);
    
    const imgOrder = {
        order: `${props.fotoOrder}`
    }

    const textOrder = {
        order: `${props.textOrder}`
    }

    return (
        <>
            <Media query="(min-width: 975px)">
                {matches =>
                    matches ? (
                        <section className="portfolio pattern-margin">
                            <div className="portfolio__img" style={imgOrder}>
                                <img src={props.pimg} alt={props.about} />
                            </div>
                            <div className="portfolio__container" style={textOrder}>
                                <h2 className="portfolio__container__title">{props.ptitle}</h2>
                                <p className="portfolio__container__text">{props.ptext}</p>
                                <a href={props.purl} target="_blank" rel="noopener noreferrer">
                                    <button className="portfolio__container__button"><FontAwesomeIcon icon={faGithub} size="2x"/> {props.pbutton}</button>
                                </a>
                            </div>
                        </section> 
                    ) : (
                        <section className="portfolio pattern-margin">
                            <div className="portfolio__img">
                                <img src={props.pimg} alt={props.about} />
                            </div>
                            <div className="portfolio__container">
                                <h2 className="portfolio__container__title">{props.ptitle}</h2>
                                <p className="portfolio__container__text">{props.ptext}</p>
                                <a href={props.purl} target="_blank" rel="noopener noreferrer">
                                    <button className="portfolio__container__button"><FontAwesomeIcon icon={faGithub} size="2x"/> {props.pbutton}</button>
                                </a>
                            </div>
                        </section> 
                    )
                }
            </Media>
        </>
    )
}

export default Portfolio;