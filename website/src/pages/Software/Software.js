import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import './Software.css';

function Software() {

  return (
    <div className="slide-show">
    <h1 style={{color:"#43dea5", textAlign:'center' }}>Software Design</h1>  
    <br></br>      
    <h1 className='sub-topic-ha'>User Interfaces</h1>
    
        <Slide easing="ease">
                <div className="each-slide-sd">
                <div className="left">
                     <img alt="" src={process.env.PUBLIC_URL + '/images/webapp/Signin.png'} style={{ display: 'block', marginRight:'auto',width:'60%',opacity:'70%'}}/> 
                     <p className='sf-text'>Landmines are prominent weapons designed to destroy or 
                        disable enemy targets which detonate by the movement of its target, pressure, 
                        sound, magnetism and vibration. More than a hundred million land mines are scattered 
                        around the world which remain hazardous for years even after conflict termination
                        posing a significant threat to civilians and the economy. More Effective and 
                        sophisticated tools to detect, locate and deactivate landmines are urgently needed
                        to make lands safer for humans to use.</p>
                </div>
                </div>
                <div className="each-slide-sd">
                <div className="left">
                     <img alt="" src={process.env.PUBLIC_URL + '/images/webapp/Auth.png'} style={{ display: 'block', marginRight:'auto',width:'60%',opacity:'70%'}}/> 
                     <p className='sf-text'>Landmines are prominent weapons designed to destroy or 
                        disable enemy targets which detonate by the movement of its target, pressure, 
                        sound, magnetism and vibration. More than a hundred million land mines are scattered 
                        around the world which remain hazardous for years even after conflict termination
                        posing a significant threat to civilians and the economy. More Effective and 
                        sophisticated tools to detect, locate and deactivate landmines are urgently needed
                        to make lands safer for humans to use.</p>
                </div>
                </div>
                <div className="each-slide-sd">
                <div className="left">
                     <img alt="" src={process.env.PUBLIC_URL + '/images/webapp/UserInt.png'} style={{ display: 'block', marginRight:'auto',width:'60%',opacity:'70%'}}/> 
                     <p className='sf-text'>Landmines are prominent weapons designed to destroy or 
                        disable enemy targets which detonate by the movement of its target, pressure, 
                        sound, magnetism and vibration. More than a hundred million land mines are scattered 
                        around the world which remain hazardous for years even after conflict termination
                        posing a significant threat to civilians and the economy. More Effective and 
                        sophisticated tools to detect, locate and deactivate landmines are urgently needed
                        to make lands safer for humans to use.</p>
                </div>
                </div>
                <div className="each-slide-sd">
                <div className="left">
                     <img alt="" src={process.env.PUBLIC_URL + '/images/webapp/AdminInt.png'} style={{ display: 'block', marginRight:'auto',width:'60%',opacity:'70%'}}/> 
                     <p className='sf-text'>Landmines are prominent weapons designed to destroy or 
                        disable enemy targets which detonate by the movement of its target, pressure, 
                        sound, magnetism and vibration. More than a hundred million land mines are scattered 
                        around the world which remain hazardous for years even after conflict termination
                        posing a significant threat to civilians and the economy. More Effective and 
                        sophisticated tools to detect, locate and deactivate landmines are urgently needed
                        to make lands safer for humans to use.</p>
                </div>
                </div>
                <div className="each-slide-sd">
                <div className="left">
                     <img alt="" src={process.env.PUBLIC_URL + '/images/webapp/AdminInt2.png'} style={{ display: 'block', marginRight:'auto',width:'60%',opacity:'70%'}}/> 
                     <p className='sf-text'>Landmines are prominent weapons designed to destroy or 
                        disable enemy targets which detonate by the movement of its target, pressure, 
                        sound, magnetism and vibration. More than a hundred million land mines are scattered 
                        around the world which remain hazardous for years even after conflict termination
                        posing a significant threat to civilians and the economy. More Effective and 
                        sophisticated tools to detect, locate and deactivate landmines are urgently needed
                        to make lands safer for humans to use.</p>
                </div>
                </div>
                <div className="each-slide-sd">
                <div className="left">
                     <img alt="" src={process.env.PUBLIC_URL + '/images/webapp/SuperAdminInt.png'} style={{ display: 'block', marginRight:'auto',width:'60%',opacity:'70%'}}/> 
                     <p className='sf-text'>Landmines are prominent weapons designed to destroy or 
                        disable enemy targets which detonate by the movement of its target, pressure, 
                        sound, magnetism and vibration. More than a hundred million land mines are scattered 
                        around the world which remain hazardous for years even after conflict termination
                        posing a significant threat to civilians and the economy. More Effective and 
                        sophisticated tools to detect, locate and deactivate landmines are urgently needed
                        to make lands safer for humans to use.</p>
                </div>
                </div>              
        </Slide>

    </div>
  );
}
export default Software;


