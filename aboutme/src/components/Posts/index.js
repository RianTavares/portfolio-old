import React, {useState ,useEffect} from 'react';


const Posts = (props) => {
    return(
    <>
        <section className="post">
            <div className="post__img">
                <img src={props.img} alt={props.about} />
            </div>
            <h2 className="post__title">{props.ptitle}</h2>
            <p className="post__text">{props.ptext}</p>
            <a href={props.purl} target="_blank" rel="noopener noreferrer">
                <button className="post__button">{props.pbutton}</button>
            </a>
        </section>    
    </>)
}

export default Posts;