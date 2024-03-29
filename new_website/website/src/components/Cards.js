import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Cards(){
	return (
		<>
		<div className='cards'>
			<h1> Hardware Architecture </h1>
			<div className="cards__container">
				<div className="cards_wrapper">
					<ul className="cards__items">
					<CardItem
			src="images/Hardware.png"
			text="Hardware architecture"
			label="Design"
			path="/hardware"
		/>	
					<CardItem
			src="images/Cloud_Security.png"
			text="Software architecture"
			label="Design"
			path="/hardware"
		/>	
					</ul>
				</div>
			</div>
		</div>


		<div className='cards'>
			<h1> Software Architecture </h1>
			<div className="cards__container">
				<div className="cards_wrapper">
					<ul className="cards__items">
					<CardItem
			src="images/Hardware.png"
			text="Hardware architecture"
			label="Design"
			path="/hardware"
		/>	
					<CardItem
			src="images/Cloud_Security.png"
			text="Software architecture"
			label="Design"
			path="/hardware"
		/>	
					</ul>
				</div>
			</div>
		</div>


		<div className='cards'>
			<h1> Autonmous Navigation </h1>
			<div className="cards__container">
				<div className="cards_wrapper">
					<ul className="cards__items">
					<CardItem
			src="images/Hardware.png"
			text="Hardware architecture"
			label="Design"
			path="/hardware"
		/>	
					<CardItem
			src="images/Cloud_Security.png"
			text="Software architecture"
			label="Design"
			path="/hardware"
		/>	
					</ul>
				</div>
			</div>
		</div>
		</>
	)
}

export default Cards;
