import './Home.css';
import React from 'react';
import TypeWriter from '../../components/TypeWriter'

function Home() {
    return(
        <div className="banner-area" id={'home'}>
            <TypeWriter></TypeWriter>
        </div>
    )
}
export default Home;