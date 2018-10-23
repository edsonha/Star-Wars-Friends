import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div className='scroll' style={{ overflowY: 'auto', height: 'calc(100vh - 280px)'}}> 
			{props.children}
		</div>
	);
}

export default Scroll;