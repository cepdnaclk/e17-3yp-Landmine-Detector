import React from 'react'
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './Profile.css'

function Profile() {
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
    <section>
      {/* Username should get */}
      <header>User</header>

      <div style={{paddingLeft:'300px'}}>
        <br/>
      <form>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          GPS: <input type="text" class="" id="xx" />
          GPS: <input type="text" class="" id="" />
          </div>
          <br/>
          <div style={{display:'flex', justifyContent:'space-around'}}>
          GPS: <input type="text" class="" id="" />
          GPS: <input type="text" class="" id="" />
        </div>
        <br/>
          <button style={{justifyContent:'center'}} type="submit" class="">SEARCH</button>
</form>
      </div>


    </section>
    </div>
  );
}


export default Profile;