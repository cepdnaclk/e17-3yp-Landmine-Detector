import './Home.css';
import React from 'react';
import TypeWriter from '../../components/TypeWriter'

function Home() {
    return(
        <div>
            <h1 className='heading'>Landmine Detection Robot</h1>
           <div className="banner-area" id={'home'}>
            {/* <TypeWriter></TypeWriter> */}
            </div> 
        </div>
        
    )
}
export default Home;