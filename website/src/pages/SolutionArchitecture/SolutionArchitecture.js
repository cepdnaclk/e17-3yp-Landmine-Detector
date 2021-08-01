import './SolutionArchitecture.css'

function SolutionArchitecture() {
    return(
        <div className='sol-block'>
            <h1 className='main-topic'>Solution Architecture</h1>
            <br></br>
            <br></br>
            <br></br>

            <div className="SolutionArchitectures">

                <div className="Application ">
                <img className="Application_Logo" alt="" src={process.env.PUBLIC_URL + '/images/web.jpg'} width="100" height="95"  />
                    <h3 className='sub-topic'>Web Application</h3>
                    <p className='text'>
                        The Web Applciation is hosted using Amplify Serverless methods. Acts as the access point for all the users in the User Groups. After logging in users can access either modular front page for controling a spcific robot or User Admin Page related to a group who has all data access.Considering control page for a specific robot a detail entry point and control options will be available along with graphical representation of search area maps.
                    </p>

                </div>

                <div className="Application ">
                    <img className="Application_Logo" alt="" src={process.env.PUBLIC_URL + '/images/robo_logo.jpg'} width="100" height="95" />
                    <h3 className='sub-topic'>Automated Robot</h3>
                    <p className='text'>
                    Is the main hardware component of the project. Includes a core functionality of landmine detection, autonoumus navigation and data exchange. Accoring to tha main data flow the key aspects of the robot will be, accepting cordinates from server, storing a data structures to maintain search area details, passive landmine detection while navigatting through the path while updating the data and sending back data to the servers. 
                    </p>

                </div>

                <div className="Application ">
                    <img className="Application_Logo" alt="" src={process.env.PUBLIC_URL + '/images/web_server.jpg'} width="100" height="95" />
                    <h3 className='sub-topic'>Web Server</h3>
                    <p className='text'>
                        The backend servers acts as an immediate between the hardware component and user all while doing essential tasks of data storing , calculating parameters and orgainzing inputs and outputs. When the inital inputs received from user server cloud functions would calculate intial boundaries for search area and relevent parameters for setting up the search.Once the search starts the robot updates data stored here to give a real time like data accessability for the users.
                    </p>

                </div>

            </div>
            <br></br>
            <br></br>
            {/* <img alt="" src={process.env.PUBLIC_URL + '/images/Overview.png'} style={{ display: 'block',width:'100%',opacity:'70%'}}/> */}

            <div>
            {/* <p className='text'>
                    Landmines are prominent weapons designed to destroy or disable enemy targets which detonate by the movement of its target, pressure, sound, magnetism and vibration. More than a hundred million land mines are scattered around the world which remain hazardous for years even after conflict termination posing a significant threat to civilians and the economy. More Effective and sophisticated tools to detect, locate and deactivate landmines are urgently needed to make lands safer for humans to use.
                    </p>  */}

                    <div className="each-slide-sa">
                    <h1 className='sub-topic-ha'>DATA FLOW</h1>
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/Overview.png'} style={{ display: 'block', marginRight:'auto',width:'45%',opacity:'70%'}}/> 
                            <ul  className='ha-text'>
                                <li>Data Flow Generation at the user interface</li>
                                <br></br>
                                <li>Inserts GPS cordinates  along with a search area. The data will be sent to the servers as raw input</li>
                                <br></br>
                                <li>When recieved cloud functions would run within the backend to calculate relevent boundaries of given search area in the real environment</li>
                                <br></br>
                                <li>These values will be stored at the servers and at the same time send calculated values to the robot through the established network</li>
                                <br></br>
                                <li>When received a data structure would be created within the Robot to keep track of the path it travelled, Landmine locations, boundaries.</li>
                                <br></br>
                                <li>While travelling the details of the search would first be stored at the local data structure. Then with timed HTTP requests would send the updates of the data to the backend</li>
                                <br></br>
                                <li>The received values would get stored at the servers, and also providing read access to the webserver for the updated data</li>
                                <br></br>
                                <li>When data received a virtual map drawn to represent the location data gets drawn at the user interface. Providing visual  and informative data to the user</li>
                                <br></br>

                            </ul>
                            {/* <p className='ha-text'>Landmines are prominent weapons designed to destroy or 
                                disable enemy targets which detonate by the movement of its target, pressure, 
                                sound, magnetism and vibration. More than a hundred million land mines are scattered 
                                around the world which remain hazardous for years even after conflict termination
                                posing a significant threat to civilians and the economy. More Effective and 
                                sophisticated tools to detect, locate and deactivate landmines are urgently needed
                                to make lands safer for humans to use.</p> */}
                        </div>
                    </div>

            </div>

            <div>
                
            <div className="each-slide-sa">
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className='sub-topic-ha'>SECURITY</h1>
                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/Cloud_Security.png'} style={{ display: 'block', marginRight:'auto',width:'25%',opacity:'70%'}}/> 
                            <ul  className='ha-text'>
                                <h2 className="sec-topic">Cloud Security</h2>
                                <br></br>
                                <li>Data protection-AWS provides security services to protect our data, accounts and workloads from unauthorized access. AWS data protection services provide encryption and key management and threat detection that continuously monitors and protects our accounts and workloads.</li>
                                <br></br>
                                <li>Identity and access management</li>
                                <br></br>
                                <li>Network and application protection</li>
                                <br></br>
                                <li>Compliance and data privacy</li>
                    

                            </ul>
        
                        </div>

                        <div className="left-sa">
                            <img alt="" src={process.env.PUBLIC_URL + '/images/aws_iot.jpg'} style={{ display: 'block', marginRight:'auto',width:'20%',opacity:'70%'}}/> 
                            <ul  className='ha-text'>
                                <h2 className="sec-topic">IOT Security</h2>
                                <br></br>
                                <li>When we connect our  Landmine detection robot to AWS IoT Core, it provides the security  to securely connect devices to the cloud . AWS IoT core security features allow enforcing security controls such as authentication, authorization, audit logging and end-to-end encryption.</li>
                               
                                <br></br>
                                <br></br>

                            </ul>
        
                        </div>

        
                    </div>
            </div>
            
        </div>


    )

}
export default SolutionArchitecture;