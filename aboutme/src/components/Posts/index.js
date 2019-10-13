import React from 'react';


const Posts = (props) => {

    const sectionStyle = {
        backgroundImage: `url(${props.img})`
    }

    return(
    <>
        <section className="post">
            <div className="post__img" style={sectionStyle}>
            </div>
            <div className="post__container">
                <h2 className="post__container__title">{props.ptitle}</h2>
                <p className="post__container__text">{props.ptext}</p>
                <a href={props.purl} target="_blank" rel="noopener noreferrer">
                    <button className="post__container__button">{props.pbutton}</button>
                </a>
            </div>
        </section>    
    </>)
}

export default Posts;