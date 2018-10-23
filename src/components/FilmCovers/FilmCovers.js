import React from "react";
import "./FilmCovers.css";

const FilmCovers = ({ boolean, cover }) => {
  return(
    <div className="Popup-covers">
      {boolean.map((bool, i) => {
        if (bool) { 
          return (
            <div key={i} className="Popup-coverOn">
              <img src={require(`../../img/filmcovers/${cover[i]}.jpg`)} alt="film cover" />
            </div>
          );
        } else {
          return (
            <div key={i} className="Popup-coverOff">
              <img src={require(`../../img/filmcovers/${cover[i]}.jpg`)} alt="film cover" />
            </div>
          );
        }
      })}
    </div>
  )
};

export default FilmCovers;