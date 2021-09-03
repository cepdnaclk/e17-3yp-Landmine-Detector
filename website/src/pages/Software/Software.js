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
        
        <img alt="" src={process.env.PUBLIC_URL + '/images/cloud-architecture.JPG'} style={{ display: 'block',marginLeft:'auto',marginRight:'auto',width:'80%',opacity:'80%'}}/>          
        <br></br>
        <br></br>
        <br></br>
        
        <div>
        <h1 className='sub-topic-ha'>UI designs</h1>
          <div className="slide-container">
          <Fade>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-1.JPG"} />
            </div>
            <p>Login UI</p>
          </div>
          <div className="each-fade">
            <p>two-step verification</p>
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-2.JPG"} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-3.JPG"} />
            </div>
            <p>User Interface</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-4.JPG"} />
            </div>
            <p>User Interface</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-5.JPG"} />
            </div>
            <p>Admin Interface</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-6.JPG"} />
            </div>
            <p>Admin Interface</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-7.JPG"} />
            </div>
            <p>Admin Interface</p>
          </div>
          <div className="each-fade">
            <div>
              <img src={process.env.PUBLIC_URL +"/images/UI-8.JPG"} />
            </div>
            <p>Super Admin</p>
          </div>
        </Fade>
          </div>

        </div>





    </div>

  );
}
export default Software;


