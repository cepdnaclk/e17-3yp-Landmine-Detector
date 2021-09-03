import './Hardware.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function Hardware() {
    return(
        <div className="slide-show">
        <h1 style={{color:"#43dea5", textAlign:'center' }}>Hardware Design</h1>  
        <br></br>      
            <Slide easing="ease">
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>Obstacle Detection</h1>
                        <div className="left">
                        
                         <img alt="" src={process.env.PUBLIC_URL + '/images/obstacle.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                         <p className='ha-text'>Landmines are prominent weapons designed to destroy or 
                            disable enemy targets which detonate by the movement of its target, pressure, 
                            sound, magnetism and vibration. More than a hundred million land mines are scattered 
                            around the world which remain hazardous for years even after conflict termination
                            posing a significant threat to civilians and the economy. More Effective and 
                            sophisticated tools to detect, locate and deactivate landmines are urgently needed
                            to make lands safer for humans to use.</p>
                         </div>
                    </div>
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>Navigation and Locationing</h1>
                    <div className="left">
                         <img alt="" src={process.env.PUBLIC_URL + '/images/Navigation_bb.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                         <p className='ha-text'>Landmines are prominent weapons designed to destroy or 
                            disable enemy targets which detonate by the movement of its target, pressure, 
                            sound, magnetism and vibration. More than a hundred million land mines are scattered 
                            around the world which remain hazardous for years even after conflict termination
                            posing a significant threat to civilians and the economy. More Effective and 
                            sophisticated tools to detect, locate and deactivate landmines are urgently needed
                            to make lands safer for humans to use.</p>
                    </div>
                    </div>
                    
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>Motor Driver</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/Motor_bb.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <p className='ha-text'>Landmines are prominent weapons designed to destroy or 
                                disable enemy targets which detonate by the movement of its target, pressure, 
                                sound, magnetism and vibration. More than a hundred million land mines are scattered 
                                around the world which remain hazardous for years even after conflict termination
                                posing a significant threat to civilians and the economy. More Effective and 
                                sophisticated tools to detect, locate and deactivate landmines are urgently needed
                                to make lands safer for humans to use.</p>
                        </div>
                    </div>

                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>Metal Detector</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/collpit.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <p className='ha-text'>Landmines are prominent weapons designed to destroy or 
                                disable enemy targets which detonate by the movement of its target, pressure, 
                                sound, magnetism and vibration. More than a hundred million land mines are scattered 
                                around the world which remain hazardous for years even after conflict termination
                                posing a significant threat to civilians and the economy. More Effective and 
                                sophisticated tools to detect, locate and deactivate landmines are urgently needed
                                to make lands safer for humans to use.</p>
                        </div>
                    </div>
            </Slide>
            <br/><br/>
            <div>
                    <div className="each-slide-sa">
                    <h1 className='sub-topic-ha'>Connections</h1>
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/connection.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                            <div  className='hd-text'>
                                <p>asasdasdadass</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div>
                    <div className="each-slide-sa">
                    <h1 className='sub-topic-ha'>Power</h1>
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/power.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                            <div  className='hd-text'>
                                <p>asasdasdadass</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Hardware;