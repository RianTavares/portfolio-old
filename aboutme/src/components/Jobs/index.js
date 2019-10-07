import React from 'react';

const Jobs = (props) => {

    const sectionStyle = {
        backgroundImage: `url(${props.photo})`
    }

    return(
        <>
            <div className="job-item">
                <div className="job-item__img" style={sectionStyle}></div>
                <div className="job-item__text">
                    <p>{props.details}</p>
                </div>
            </div>
        </>
    )
}
export default Jobs;