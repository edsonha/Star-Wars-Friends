import React from 'react';
import './PlanetPicture.css';

const PlanetPicture = ({ homeworld }) => {
  try { 
    return (
      <div className="planetPhoto">
        <img 
          src={require(`../../img/planets/${homeworld}.png`)} 
          alt="homeworld" 
        />
        <img
          className="magnifier"
          src={require("../../img/Magnifier.png")}
          alt="check planet info"
        />
      </div>
    );
  } catch (err) { 
    return (
      <div className="planetPhoto">
        <img
          src={require(`../../img/planets/Alderaan.png`)}
          style={{ filter: "grayscale(100%) blur(1px)" }}
          alt="homeworld"
        />
        <img
          className="magnifier"
          src={require("../../img/Magnifier.png")}
          alt="check planet info"
        />
        <span className="Popup-questionMark">?</span>
      </div>
    );
  }
};

export default PlanetPicture;