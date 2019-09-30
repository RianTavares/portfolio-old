import React from 'react';
import Typed from 'react-typed';

const TypedJs = () => {
    return (
        <div className="typed-name">
            <Typed
                strings={[
                    '$ Rian Tavares/ ']}
                typeSpeed={30}
            />
        </div>
    );
}

export default TypedJs;