import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Introduction from '../Introduction';

function Home(){
	return (
		<>
			<HeroSection />
			<Introduction />
			<Cards />
			<Footer />
		</>
	);
}

export default Home;
