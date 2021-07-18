import './Home.css';
import React from 'react';
import TypeWriter from '../../components/TypeWriter'

function Home() {
    return(
        <div>
           <div className="banner-area" id={'home'}>
                <div className="main-image" ></div>
                <h1 className='heading'>Landmine Detector</h1>
            {/* <TypeWriter></TypeWriter> */}
            </div> 
        </div>
        
    )
}
export default Home;