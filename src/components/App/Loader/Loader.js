import React from 'react';

const Loader = (props) => (
  <div>
    <div className="loader" style={{ visibility: `${props.userInput.length > 0 && props.photos.length === 0 ? "visible" : "hidden" }` }}>
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
        </filter>
      </defs>
    </svg>    
  </div>
);

export default Loader;