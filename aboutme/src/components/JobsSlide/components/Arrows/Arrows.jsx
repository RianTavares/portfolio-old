import React from 'react';

const Arrows = (props) => {
  const { className, style, onClick, type } = props;

  if(type === "next") {
    return (
      <div 
        className={className}
        style={{ ...style, 
          display: "flex", 
          right: 0,
          width: 50,
          height: 100,
        }}
        onClick={onClick}
      >
        seta
      </div>
    )
  }

  return (
    <div 
      className={className}
      style={{ ...style, 
        display: "flex", 
        left: 0,
        width: 50,
        height: 100,
      }}
      onClick={onClick}
    >
      seta
    </div>
  )
}

export default Arrows