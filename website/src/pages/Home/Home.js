import './Home.css';
import React from 'react';

function Home() {
    return(
        <div className="banner-area">
            <img src={process.env.PUBLIC_URL + '/images/land.jpeg'} className = 'img'></img>
        </div>
    )
}
export default Home;