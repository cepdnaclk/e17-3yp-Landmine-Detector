import React, { useState } from 'react'
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './Profile.css'
import MapContainer from '../MapContainer/MapContainer';
import OpenStreetMap from '../OpenStreetMap/OpenStreetMap';





function Profile() {


  const submitDetails = ()=> {
    console.log(lan, lat);
  }


  const [lan, setLan] = useState(6.0535);
  const [lat, setLat] = useState(80.2210);
  const [area, setArea] = useState(0);
  const [des, setDes] = useState(0);

  

  return(
    <div>
    <div className='sidebar'>
      <header>Landmine detector</header>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Current</a></li>
        <li><a href="#">History</a></li>
        <li><a href="#">Tasks</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
    </div>
    <section >
      {/* Username should get */}
      <header>User</header>

      <div style={{paddingLeft:'25%'}}>
        <br/>
      {/* <form> */}
        <div style={{display:'flex', justifyContent:'space-around'}}>
          LAN: <input type="text" class="" id="xx" onChange={e=>setLan(e.target.value)} value={lan} />
          LAT: <input type="text" class="" id="" onChange={e=>setLat(e.target.value)} value={lat} />
          </div>
          <br/>
          <div style={{display:'flex', justifyContent:'space-around'}}>
          Area: <input type="text" class="" id="" />
          Des: <input type="text" class="" id="" />
        </div>
        <br/>
          <button onClick={submitDetails} style={{justifyContent:'center'}} type="submit" class="">SEARCH</button>
{/* </form> */}
        {/* <MapContainer /> */}
        <OpenStreetMap lat={lat} lan={lan} />
      </div>



    </section>
    </div>
  );
}


export default Profile;