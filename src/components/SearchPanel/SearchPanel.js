import React from 'react';
import './SearchPanel.css';
import FilterOptions from '../FilterOptions/FilterOptions';

const SearchPanel = ({ searchChange, clickChange, filterChange }) => {
	return (
		<div className='searchSettings'>
			<div className='filterSortContainer'>
				<button className='sortButton' onClick={clickChange}>
					<i className="f3 fas fa-sort-alpha-down"></i>
				</button>
				<FilterOptions onChange={filterChange} /> 
			</div> 
			<label className='searchContainer'>
			<input 
				className='searchInput'
				type='search' 
				placeholder='Search Characters'
				onChange={searchChange}
			/>
			<span className='borderBottom-Input'> </span>
			</label>
		</div>
	);
}

export default SearchPanel;