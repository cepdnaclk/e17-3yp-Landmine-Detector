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
                         <p className='hd-text'>The handler or the main processing unit of the robot. 
                         Incharge of conveying the metal detection information to the network and at same time
                         work on autonoumous navigation managing a data structure.</p>
                         </div>
                    </div>
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>NEO6M-GPS</h1>
                    <div className="left">
                         <img alt="" src={process.env.PUBLIC_URL + '/images/neo.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                         <p className='hd-text'>Component that indicates the current GPS location of the robot.
                         Helps to identify landmine locations as well as location of the robot during a search.</p>
                    </div>
                    </div>
                    
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>GYRO SENSOR</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/Gyro.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <p className='hd-text'>Direction sensing component works in conjunction with the NEO6M
                            to provide navigation direction while the robot is in motion</p>
                        </div>
                    </div>
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>SIM900A</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/sim.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <p className='hd-text'>Used for the network connectivity between the robot and the servers.
                            Holds significant importance as primary connection provider. </p>
                        </div>
                    </div>
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>L298N</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/L298.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <p className='hd-text'>Motor driver component of the robot to handle the 4x motor system. Would work alongside GYRO sensor
                            for control signals to be conveyed to the wheels</p>
                        </div>
                    </div>
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>MOTORS</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/motor.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <p className='hd-text'>Since efficient and carfeul search is required a 100RPM gear motor is used to navigate
                            the tricky search paths. 4x wheel design used to withstand terrain variations.</p>
                        </div>
                    </div>
                    <div className="each-slide">
                    <h1 className='sub-topic-hd'>WHEELS</h1>
                        <div className="left">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/tyre.jpg'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                            <p className='hd-text'>65mm Rubber Wheels used for both withstanding rough terrain and providing stability for the whole 
                            structure of the robot.</p>
                        </div>
                    </div>
            </Slide>
            
        </div>

        


    )
}


export default Hardware;