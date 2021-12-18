import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Cards(){
	return (
		<div className='cards'>
			<h1> Hardware Architecture </h1>
			<div className="cards__container">
				<div className="cards_wrapper">
					<ul className="cards__items">
					<CardItem />	
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards;
