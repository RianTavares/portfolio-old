import React from 'react';

const Skills = (props) => {

    const skillLevel = `item-skill__level ${props.level}`
    return (
        <>
            <div className="item-skill">
                <p>{props.skill}</p>
                <div className={skillLevel}>
                    <div className="item-skill__level__item"></div>
                    <div className="item-skill__level__item"></div>
                    <div className="item-skill__level__item"></div>
                    <div className="break"></div>
                    <h3>{props.label}</h3>
                </div>
            </div>
        </>
    )
}

export default Skills;