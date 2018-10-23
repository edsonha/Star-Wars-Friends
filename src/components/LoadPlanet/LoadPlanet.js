import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import PlanetPicture from '../PlanetPicture/PlanetPicture';
import './LoadPlanet.css';

import gasgiant from '../../img/terrains/gasgiant.jpg';
import desert from '../../img/terrains/desert.jpg';
import urban from '../../img/terrains/urban.jpg';
import grasslands from '../../img/terrains/grasslands.jpg';
import grassyhills from '../../img/terrains/grassyhills.jpg';
import ocean from '../../img/terrains/ocean.jpg';
import islands from '../../img/terrains/islands.jpg';

class LoadPlanet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homeworld: '',
			terrain: '',
			climate: '',
			diameter: '',
			gravity: ''
		}
	}

	_isMounted = false 
	componentDidMount() { 
		this._isMounted = true
		fetch(this.props.homeworld)
			.then(response => response.json())
			.then(planetData => {if (this._isMounted) {this.setState({
				homeworld: planetData.name, 
				terrain: planetData.terrain,
				climate: planetData.climate,
				diameter: planetData.diameter,
				gravity: planetData.gravity
			})}});
	}

	componentWillUnmount () {
		this._isMounted = false
	}

	pictureName = () => {
	  const {terrain} = this.state;
	    if (terrain.includes('gas giant')) {return gasgiant};
	    if (terrain.includes('desert')) {return desert};
	    if (terrain.includes('urban') || terrain.includes('cityscape')) {return urban};
	    if (terrain.includes('grass')) {return grasslands};
	    if (terrain.includes('forests')) {return grassyhills};
	    if (terrain.includes('ocean')) {return ocean};
	    if (terrain.includes('islands')) {return islands};
  }   

  planetBackground = (popupBackground) => {
  	let bgStyle;
    	if (popupBackground === undefined) {
      	bgStyle = {
          backgroundColor: 'black',
          color: 'white',
          border:'2px solid transparent',
          borderImage: 'linear-gradient(to left,#aaa, #222, #aaa) 30 stretch',
    		}
      } else {
	        bgStyle = {
		        background:'transparent',
		        backgroundImage:`linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.3) 100%)
		        ,url(${popupBackground})`,
		        backgroundSize:'cover',
		        border:'2px solid transparent',
		        borderImage: 'linear-gradient(to left,#aaa, #222, #aaa) 30 stretch',
	        }
	    }
      return bgStyle;
  }

	render() {
		const { homeworld, climate, gravity, terrain, diameter } = this.state;
		const popupBackground = this.pictureName();
		const backgroundStyle = this.planetBackground(popupBackground);
		if (homeworld === '') {
			return <h1>Loading</h1>
		} else {
			return (
				<Popup
					trigger={
						<div style={{position:'relative', cursor:'pointer'}}>
							<h6 style={{margin:'20px 0 0 0', paddingBottom:'6px'}}>Homeworld:</h6>
	            <h2 style={{marginTop:'0', paddingTop:'0', fontStyle:'italic'}}>{homeworld}</h2>
							<PlanetPicture homeworld={homeworld} />
						</div>
					}
					className='PopupPlanet-style'
					contentStyle={backgroundStyle} 
					arrowStyle={{background:'linear-gradient(to bottom,#aaa, #222)'}}
					position='top center' 
					on='click'
				>
				<div>
					<p>Terrain: {terrain}</p>
					<hr />
					<p>Climate: {climate}</p>
					<hr />
					<p>Gravity: {gravity}</p>
					<hr />
					<p>Diameter: {diameter}</p>
				</div> 
				</Popup>
			)
		}
	}
}

export default LoadPlanet;