import './Testing.css'
import ReactPlayer from 'react-player/youtube'

function Testing(){
    return(
        <div>
     <div className="slide-show">
            <h1 style={{color:"#43dea5", textAlign:'center' }}>Testing</h1>  
            <br></br>   
            <h2 style={{color:"#43dea5", textAlign:'left' }}>Software Testing</h2>   

                    <div className="each-slide">
                    <h1 className='sub-topic-ha'>API</h1>
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/postman_logo.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                            <div  className='hd-text'>
                                <p> Postman Used to test GraphQL API calls to check for authorization, data manupilation, data type integration. Requests are sent using API keys to validate the requests.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/aws_api.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                            <div  className='hd-text'>
                                <p> Used to tesst Appsync Graph QL requests. Helpful for accessing data elements with varying authorization levels.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br></br> 
                    <div className="each-slide">
                    <h1 className='sub-topic-ha'>Lambda function</h1>
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/aws_lambda.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                            <div  className='hd-text'>
                                <p> Important when using a serverless architecture. Used to execute functions of servers. Currenctly all defined lambda functions in the system are running on node js. Tests are done to verify authorization roles and accessebility of data on trigger ro function call. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <br></br> 
                    {/* <div className="each-slide">
                    <h1 className='sub-topic-ha'>Hardware Integration</h1>
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/mqtt_test.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                            <div  className='hd-text'>
                                <p> Mqtt Explorer used here to emulate node hardware behaviour. Check for viablity on mqtt messages passed to and from node hardware. Also to check for neccessary trigger aexecution. </p>
                            </div>
                        </div>
                    </div>
                    <br></br> */}
            
            <h2 style={{color:"#43dea5", textAlign:'left' }}>Hardware Testing</h2> 

            <h1 className='sub-topic-ha'>Manual Controller</h1>

            <div className="left-sa">

                    <div  className='hd-text-video'>
                                <p> User can switch to the manual controller if he wishes to override the autonomous drive. Connect to the robot using Bluetooth.
                                </p>
                    </div>
                    <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url='https://youtu.be/IbjO4ZFprQQ'


                        style={{ display: 'block', marginRight:0,width:'90%',opacity:'70%'}}
                        />

                        
                    </div>
                        {/* <img alt="" src={process.env.PUBLIC_URL + '/images/aws_lambda.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/>  */}

                    

           </div>

           <h2 style={{color:"#43dea5", textAlign:'left' }}>Unit Testing in PlatformIO</h2> 

{/* <h1 className='sub-topic-ha'>Manual Controller</h1> */}

<div className="left-sa">

        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/unit.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/> 
                        </div>

            
            {/* <img alt="" src={process.env.PUBLIC_URL + '/images/aws_lambda.png'} style={{ display: 'block', marginRight:'auto',width:'90%',opacity:'70%'}}/>  */}

        

</div>

















        </div>
        </div>

    )
}

export default Testing;