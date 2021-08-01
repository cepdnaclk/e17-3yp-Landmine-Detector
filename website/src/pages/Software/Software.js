import React from 'react';

import './Software.css';

function Software() {

  return (
    <div className="text-block-so">
        <h1 style={{color:"#43dea5", textAlign:'center' }}>Software Design</h1>  
        <br></br>
        <img alt="" src={process.env.PUBLIC_URL + '/images/UI.png'} style={{ display: 'block',marginLeft:'auto',marginRight:'auto',width:'80%',opacity:'80%'}}/>          
        <br></br>
        <p className="text-so">Landmines are prominent weapons designed to destroy or 
                            disable enemy targets which detonate by the movement of its target, pressure, 
                            sound, magnetism and vibration. More than a hundred million land mines are scattered 
                            around the world which remain hazardous for years even after conflict termination
                            posing a significant threat to civilians and the economy. More Effective and 
                            sophisticated tools to detect, locate and deactivate landmines are urgently needed
                            to make lands safer for humans to use.</p>
    </div>
  );
}
export default Software;


