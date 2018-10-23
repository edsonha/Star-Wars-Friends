import React from 'react';
import Popup from "reactjs-popup";
import LoadPlanet from "../LoadPlanet/LoadPlanet";
import LoadFilms from "../LoadFilms";
import './Card.css';

const Card = ({ url, name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender, homeworld, films }) => {
	return (
		<Popup 
			trigger={ 
				<div className='cardsStyle'>
					<img alt='face' src={`https://robohash.org/${url}?size=200x200`} />
					<h2>{name}</h2>
				</div>
			}
			modal 
			closeOnDocumentClick
			contentStyle={{ 
    		padding: "0px",
      	border: "1px solid grey",
      	width: "auto",
      	minWidth: "50%"
    	}}
		>
		{close => ( 
      <div> 
        <div className="Close-Popup" onClick={close}> 
          &times; 
        </div>
        <div className="Popup-header">
        	<h1>{name}</h1>
        </div>
        <div className="Popup-container">
        	<div className="Popup-planet">
          	<LoadPlanet homeworld={homeworld} />
          </div>
          <div className="Popup-content">
          	<ul>
            	<li>Mass: {mass === "unknown"
                  ? `${mass}` 
                  : `${mass} kg`}
              </li>
              <br />
              <li>Height: {height === "unknown"
                	? `${height}`
                  : `${height} cm`}
              </li>
              <br />
              <li>{`Hair color: ${hairColor}`}</li>
              <br />
              <li>{`Skin color: ${skinColor}`}</li>
              <br />
              <li>{`Eye color: ${eyeColor}`}</li>
              <br />
              <li>{`Birth year: ${birthYear}`}</li>
              <br />
              <li>{`Gender: ${gender}`}</li>
            </ul>
          </div>
          <div className="Popup-films">
          	<h6 style={{margin:'10px 0 0 0', paddingBottom:'6px', textAlign:'center'}}>Appeared in:</h6>
            <LoadFilms films={films} />
          </div>
       	</div>
    	</div>
    )}
  	</Popup>
	);
}

export default Card; 