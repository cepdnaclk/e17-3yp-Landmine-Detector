import React from 'react';

import './Software.css';

import { Fade } from 'react-slideshow-image';


const FadeExample = () => {
  const fadeImages = [
    "/images/UI-1.JPG",
    "/images/UI-2.JPG",
    "/images/UI-3.JPG",
    "/images/UI-4.JPG",
    "/images/UI-5.JPG",
    "/images/UI-6.JPG",
    "/images/UI-7.JPG",
    "/images/UI-8.JPG"
  ];
};

function Software() {

  return (

    <div className="text-block-so">
        <h1 style={{color:"#43dea5", textAlign:'center' }}>Software Design</h1>  
        <br></br>
        <br></br>
        <br></br>
        <h1 className='sub-topic-ha'>cloud architecture</h1>
        
      
        <img alt="" src={process.env.PUBLIC_URL + '/images/cloud-architecture.JPG'} style={{ display: 'block', marginRight:'auto',width:'100%',opacity:'100%'}}/>          
            <div  className='sf-text'>
                <p >User is interacted with our front end which is hosted in AWS amplify. Authentication and authorization happen using cognito pools and identity groups. 
                  In the event of creating a user a lambda function is called to sign up a user to a relevant group. With authorized credentials the user calls the API to
                   initiate a new search. The input values are stored in the database and at the same time lambda function is called to publish the data to a topic in the IoT core.
                    Then the robots which are subscribed to the same topic receive data via the MQTT protocol. 
Returned data from the robot will be published using MQTT and using IoT rule by which the data can be processed. Once the data is received, an aws lambda function will trigger and check
 for identity and access of the robot and call the API to store the data into the database. And at the same time data is sent to the user.
</p>
           
        </div>

        {/* <img alt="" src={process.env.PUBLIC_URL + '/images/cloud-architecture.JPG'} style={{ display: 'block',marginLeft:'auto',marginRight:'auto',width:'80%',opacity:'80%'}}/>           */}
        <br></br>
        <br></br>
        <br></br>
        
        <div>
        <h1 className='sub-topic-ha'>UI designs</h1>
          <div className="slide-container">
          <Fade>

          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/Signin.JPG"} />
            </div>
            <p>Login UI</p>
          </div>
          <div className="each-fade">
            <p>two-step verification</p>
            <div>
              <img src={process.env.PUBLIC_URL +"/images/Auth.JPG"} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI.JPG"} />
            </div>
            <p>User Interface</p>
          </div>
          {/* <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-5.png"} />
            </div>
            <p>User Interface</p>
          </div> */}
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/history.JPG"} />
            </div>
            <p>History</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/profile.JPG"} />
            </div>
            <p>Profile</p>
          </div>

        </Fade>
          </div>

        </div>





    </div>

  );
}
export default Software;


