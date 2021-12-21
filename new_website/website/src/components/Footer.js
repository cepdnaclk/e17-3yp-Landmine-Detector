import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
	return (
		<div className="footer-container">
			<section className="footer-subscription" >
				<p className="footer-subscription-heading">
					Contact us	
				</p>
				<p className="footer-subscription-text">
					For further information
				</p>
				<form>
					<input type="email" name="email" placeholder="Your Email" className="footer-input"/>
					<Button buttonStyle='btn--outline'>Email Us</Button>
				</form>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About US</h2>
						<Link to='/contact'>Get in touch</Link><br></br>
						<Link to='/documentation'>Docs</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
