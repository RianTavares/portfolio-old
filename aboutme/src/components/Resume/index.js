import React from 'react';
import qrcode from '../../assets/imgs/qr-code.svg';

const Resume = (props) => {
    return(
    <>
        <section className="resume">
            <div className="resume__body">
                <div className="resume__body__text">
                    <h1>{props.title}</h1>
                    <h3>{props.subtitle}</h3>
                </div>
                <div className="resume__body__img">
                    <img src={qrcode} alt="Rian Resume QRcode"/>
                </div>
            </div>  
        </section>   
    </>)
}

export default Resume;