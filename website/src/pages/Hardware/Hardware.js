import './Hardware.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function Hardware() {
    return(
        <div>
        <div className="slide-show">
        <h1 style={{color:"#43dea5", textAlign:'center' }}>Hardware Design</h1>  
        <br></br>      

            <div>
            <Slide easing="ease">
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>Obstacle Detection</h1>
                        <div className="left">
                        
                         <img alt="" src={process.env.PUBLIC_URL + '/images/obstacle.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                         <ul  className='ha-text'>
                                <li>Obstacles detected using Ultra-Sonic sensors</li>
                                <br></br>
                                <li>Directly using the sensors gives somewhat accurate results but can deviate from actual value due to temperature and humidity.</li>
                                <br></br>
                                <li>The landmine detector is an outdoor robot which means the values can change.</li>
                                <br></br>
                                <li>To resolve this issue we add temperature and humidity compensation to distance calculated.</li>
                                <br></br>
                                <li>DHT11 humisity and temperature sensor is used to get required values.</li>
                                <br></br>
                            </ul>
                         </div>
                    </div>
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>Navigation and Locationing</h1>
                    <div className="left">
                         <img alt="" src={process.env.PUBLIC_URL + '/images/Navigation_bb.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                         <ul  className='ha-text'>
                                <li>Mainly done by using the Neo8M GPS module and the GY80 IMU.</li>
                                <br></br>
                                <li>Through the sensors we get the position, direction, and orientation of the robot.</li>
                                <br></br>
                                <li>In the event of obstacle or landmine detected locations of these would be stored and sent back to the server.</li>
                                <br></br>
                                <li>Calculation of an alternative path will happen avoiding obstructions. </li>

                            </ul>
                    </div>
                    </div>
                    
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>Motor Driver</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/Motor_bb.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <ul  className='ha-text'>
                                <li>The motors will be driven by L298N motor driver.</li>
                                <br></br>
                                <li>GY80 's sensors and encoders would provide requierd feedback for motor controlling.</li>
                                <br></br>
                                <li>Selecting motors where done for our requirements of,</li>
                                    <ul>
                                        <li>Weight         : 5kg</li>
                                        <li>No of Motors   : 4</li>
                                        <li>Radius         : 0.045m(4.5cm)</li>
                                        <li>Velocity       : 0.5m/s</li>
                                        <li>Max incline    : 30[deg]</li>
                                        <li>Supply Voltage : 12V</li>
                                        <li>Desired Acc    : 0.1m/s2</li><li>Weight : 5kg</li>
                                        <li>Operating Time : 1.5hrs</li>
                                    </ul>
                                <br></br>
                                <li>Theroetical values of a motor providing for above requirements,</li>
                                    <ul>
                                        <li>RPM            : 150RPM</li>
                                        <li>Torque         : 0.4Nm</li>
                                        <li>Total Power    : 4.8W</li>
                                        <li>Max Current    : 0.4A</li>
                                        <li>Battery Req    : 1.6Ah</li>
                                    </ul>
                                <br></br>
                            </ul>
                        </div>
                    </div>

                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>Metal Detector</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/collpit.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <ul  className='ha-text'>
                                <li>Our design of the metal detector will be built using the collpits oscillator circuit.</li>
                                <br></br>
                                <li>The circuit provides a constant oscillation by a feedback loop and is in the range of 100kHz.</li>
                                <br></br>
                                <li>The oscillation will be fed into an atmel (atmega328p) chip.</li>
                                <br></br>
                                <li>When detected would case an interrupt.</li>
                                <br></br>
                                <li>Calibrating the strength of the metal detector can be done by changing the current through the inductior (achieved by changing the supply voltage) or changing the number of wraps aroud the coil.</li>
                                <br></br>
                            </ul>
                        </div>
                    </div>
            </Slide>
            </div>
            <br/><br/>


                    <div>
                            <div className="each-slide">
                            <h1 className='sub-topic-ha'>3d Model</h1>
                                <div className="left">
                                    <img alt="" src={process.env.PUBLIC_URL + '/images/3d model.JPG'} style={{ display: 'block', marginRight:'auto',width:'75%',opacity:'95%'}}/> 
                                    <div  className='hd-text'>
                                        <p>3d model created using Fusion 360.
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <br></br>
                    
            
                    <div className="each-slide">
                    <h1 className='sub-topic-ha'>Connections</h1>
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/connection.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                            <div  className='hd-text'>
                                <p>The robot has a main I2C bus connecting two masters and sensors as slaves. Also an atmel chip is used as a 
                                    slave for controlling motors and interrupt generator for the metal detector. One aster being the ESP32 handles the calculations
                                    while the second master the atmel chip is responsible for communiation and data buffering. The data would be stored in an SD card 
                                    using the SPI conncetion protocol. Communication happens through the SIM900A GSM module using the UART protocol.
                                </p>
                            </div>
                        </div>
                    </div>
           
                <div>
                    <div className="each-slide">
                    <h1 className='sub-topic-ha'>Power</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/power.png'} style={{ display: 'block', marginRight:'auto',width:'75%',opacity:'70%'}}/> 
                            <div  className='hd-text'>
                                <p>There are three main power lines within the robot. A 5V power line for some sensors that require it and a 3.3V power line 
                                    for specific components which needs it for optimum performance. Such as the ESP32 , GY80 and the NEO8M. The dedicated
                                    12V would be for the motors and the metal detector. The power for the whole system will be provided using a LiPo 12V 10000mAh battery and 
                                    voltage regulators will be used to get required voltages.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>




<div className="slide-show">
<h1 style={{color:"#43dea5", textAlign:'center' }}>PCB Design</h1>  
<br></br>      

    <div>
    <Slide easing="ease">
            <div className="each-slide">
            <h1 className='sub-topic-hd'>PCB Design for Metal Detector Circuit</h1>
                <div className="left">
                
                 <img alt="" src={process.env.PUBLIC_URL + '/images/pcb1.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                 <ul  className='ha-text'>
                        <br></br>
                    </ul>
                 </div>
            </div>
            <div className="each-slide">
            <h1 className='sub-topic-hd'>PCB design for power circuit</h1>
            <div className="left">
                 <img alt="" src={process.env.PUBLIC_URL + '/images/pcb2.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
            </div>
            </div>

    </Slide>
    </div>
    <br/><br/>


            <div>
                    <div className="each-slide">
                    <h1 className='sub-topic-ha'>3d Model</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/3d model.JPG'} style={{ display: 'block', marginRight:'auto',width:'75%',opacity:'95%'}}/> 
                            <div  className='hd-text'>
                                <p>3d model created using Fusion 360.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            <br></br>
            
    
            <div className="each-slide">
            <h1 className='sub-topic-ha'>Connections</h1>
                <div className="left-sa">
                    <img alt="" src={process.env.PUBLIC_URL + '/images/connection.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                    <div  className='hd-text'>
                        <p>The robot has a main I2C bus connecting two masters and sensors as slaves. Also an atmel chip is used as a 
                            slave for controlling motors and interrupt generator for the metal detector. One aster being the ESP32 handles the calculations
                            while the second master the atmel chip is responsible for communiation and data buffering. The data would be stored in an SD card 
                            using the SPI conncetion protocol. Communication happens through the SIM900A GSM module using the UART protocol.
                        </p>
                    </div>
                </div>
            </div>
   
        <div>
            <div className="each-slide">
            <h1 className='sub-topic-ha'>Power</h1>
                <div className="left">
                    <img alt="" src={process.env.PUBLIC_URL + '/images/power.png'} style={{ display: 'block', marginRight:'auto',width:'75%',opacity:'70%'}}/> 
                    <div  className='hd-text'>
                        <p>There are three main power lines within the robot. A 5V power line for some sensors that require it and a 3.3V power line 
                            for specific components which needs it for optimum performance. Such as the ESP32 , GY80 and the NEO8M. The dedicated
                            12V would be for the motors and the metal detector. The power for the whole system will be provided using a LiPo 12V 10000mAh battery and 
                            voltage regulators will be used to get required voltages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>







    )
}


export default Hardware;