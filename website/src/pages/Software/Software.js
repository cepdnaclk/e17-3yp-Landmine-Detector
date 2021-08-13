import React from 'react';

import './Software.css';

function Software() {

  return (
    <div className="text-block-so">
        <h1 style={{color:"#43dea5", textAlign:'center' }}>Software Design</h1>  
        <br></br>
        <img alt="" src={process.env.PUBLIC_URL + '/images/UI.png'} style={{ display: 'block',marginLeft:'auto',marginRight:'auto',width:'80%',opacity:'80%'}}/>          
        <br></br>
        <p className="text-so">The current design for the control user is as shown. Controlling user gets to input relevent details about the search and the control over search start and release. Once search is live updates to the servers will be displayed while at the same time representation 
        of data can be seen in a virtual map. At the end of an operation cycle. Since the interface is used on field for quick use a more simplified approach will be taken in both entering and receiving data. </p>
    </div>
  );
}
export default Software;


