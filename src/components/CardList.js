import React from 'react';
import Card from './Card/Card';

const CardList = ({ people }) => {
	return (
		<div>
			{
				people.map(user => {
					return (
						<Card 
							key={user.url}
							url={user.url} 
							name={user.name}
							height={user.height}
							mass={user.mass}
							hairColor={user.hair_color}
							skinColor={user.skin_color}
							eyeColor={user.eye_color}
							birthYear={user.birth_year}
							gender={user.gender}
							homeworld={user.homeworld}
							films={user.films} 
						/>
					)
				})
			}	
		</div>
	);
}

export default CardList;