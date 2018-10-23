import React from 'react';
import './LoadingBar.css';
import laser from '../../img/laser.png';

const LoadingBar = () => {
	return (
   	<div style={{marginTop:'100px'}}>
      <div className="lightsaberContainer">
        <span className="loadingWord">Loading</span>
        <img src={laser} className="lightsaberHilt" alt="Lightsaber hilt" />
      	<div className="lightsaberDiv" />
       </div>
    </div>
	);
}

export default LoadingBar;