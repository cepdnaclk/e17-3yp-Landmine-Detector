import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection(){
	return(
		<div className='hero-container'>
			<video src="" autoPlay loop muted/>
		<h1> Autonomous Landmine Detector</h1>
		<div className="hero-btns">
			<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>WATCH NOW</Button>
		</div>
		</div>
	);
}

export default HeroSection
