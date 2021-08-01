import './Hardware.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function Hardware() {
    return(
        <div className="slide-show">
        <h1 style={{color:"#43dea5", textAlign:'center' }}>Hardware Design</h1>  
        <br></br>      
        {/* <img alt="" src={process.env.PUBLIC_URL + '/images/Hardware.png'} style={{ display: 'block',marginLeft:'auto', marginRight:'auto',width:'80%'}}/>  */}
            <Slide easing="ease">
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>ESP32</h1>
                        <div className="left">
                        
                         <img alt="" src={process.env.PUBLIC_URL + '/images/esp32.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                         <p className='ha-text'>Landmines are prominent weapons designed to destroy or 
                            disable enemy targets which detonate by the movement of its target, pressure, 
                            sound, magnetism and vibration. More than a hundred million land mines are scattered 
                            around the world which remain hazardous for years even after conflict termination
                            posing a significant threat to civilians and the economy. More Effective and 
                            sophisticated tools to detect, locate and deactivate landmines are urgently needed
                            to make lands safer for humans to use.</p>
                         </div>
                         {/* <div className="right">
                         <p className='text'>Landmines are prominent weapons designed to destroy or 
                            disable enemy targets which detonate by the movement of its target, pressure, 
                            sound, magnetism and vibration. More than a hundred million land mines are scattered 
                            around the world which remain hazardous for years even after conflict termination
                            posing a significant threat to civilians and the economy. More Effective and 
                            sophisticated tools to detect, locate and deactivate landmines are urgently needed
                            to make lands safer for humans to use.</p>
                        </div> */}
                    </div>
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>NEO6M-GPS</h1>
                    <div className="left">
                         <img alt="" src={process.env.PUBLIC_URL + '/images/neo.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                         <p className='ha-text'>Landmines are prominent weapons designed to destroy or 
                            disable enemy targets which detonate by the movement of its target, pressure, 
                            sound, magnetism and vibration. More than a hundred million land mines are scattered 
                            around the world which remain hazardous for years even after conflict termination
                            posing a significant threat to civilians and the economy. More Effective and 
                            sophisticated tools to detect, locate and deactivate landmines are urgently needed
                            to make lands safer for humans to use.</p>
                    </div>
                         {/* <div className="right">
                         <p className='text'>Landmines are prominent weapons designed to destroy or 
                            disable enemy targets which detonate by the movement of its target, pressure, 
                            sound, magnetism and vibration. More than a hundred million land mines are scattered 
                            around the world which remain hazardous for years even after conflict termination
                            posing a significant threat to civilians and the economy. More Effective and 
                            sophisticated tools to detect, locate and deactivate landmines are urgently needed
                            to make lands safer for humans to use.</p>
                        </div> */}
                    </div>
                    
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>GYRO SENSOR</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/Gyro.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <p className='ha-text'>Landmines are prominent weapons designed to destroy or 
                                disable enemy targets which detonate by the movement of its target, pressure, 
                                sound, magnetism and vibration. More than a hundred million land mines are scattered 
                                around the world which remain hazardous for years even after conflict termination
                                posing a significant threat to civilians and the economy. More Effective and 
                                sophisticated tools to detect, locate and deactivate landmines are urgently needed
                                to make lands safer for humans to use.</p>
                        </div>
                        {/* <div className="right">
                            <p className='text'>Landmines are prominent weapons designed to destroy or 
                                disable enemy targets which detonate by the movement of its target, pressure, 
                                sound, magnetism and vibration. More than a hundred million land mines are scattered 
                                around the world which remain hazardous for years even after conflict termination
                                posing a significant threat to civilians and the economy. More Effective and 
                                sophisticated tools to detect, locate and deactivate landmines are urgently needed
                                to make lands safer for humans to use.</p>
                        </div> */}
                    </div>
            </Slide>
        </div>
    )
}


export default Hardware;