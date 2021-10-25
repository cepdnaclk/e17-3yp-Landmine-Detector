import './Testing.css'

function Testing(){
    return(
     <div className="slide-show">
            <h1 style={{color:"#43dea5", textAlign:'center' }}>Testing</h1>  
            <br></br>    

                    <div className="each-slide">
                    <h1 className='sub-topic-ha'>API</h1>
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
           </div>

    )
}

export default Testing;