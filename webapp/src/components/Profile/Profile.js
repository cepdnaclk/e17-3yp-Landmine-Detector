
import React,{ Component } from 'react';
import Amplify, {API, graphqlOperation, Auth} from 'aws-amplify';
import PostList from '../PostList/PostList';
import { Route, Router, Link, BrowserRouter } from 'react-router-dom';
import ChangePassword from '../ChangePassword/ChangePassword';
import './Profile.css'





var userID   = '';
var email ='';
var phone ='';

// function UsereDetails(){
  
//   Auth.currentUserPoolUser()
//         .then(user=>{
          
//           // userID = user.userID
//           console.log(user)
//           userID = user.username
//           email =user.attributes.email
//           console.log(userID)
//           console.log(email);
//         })

//         return userID
// }


Auth.currentUserPoolUser()
.then(user=>{
  
  // userID = user.userID
  console.log(user)
  userID = user.username
  email =user.attributes.email
  phone =user.attributes.phone_number
  console.log(userID)
  console.log(email);
})




function Tasks() {


  return(

    <div className="left">
      {/* <button   onClick={UsereDetails}>User Details</button> */}

      {/* <h1>{userID}</h1> */}

      <table class="styled-table">
            <th>
              {userID}
            </th>
            <th></th>
            <tr>
              <td>Email :</td>
              <td> {email}</td>
            </tr>
            <tr>
              <td>User Name</td>
              <td>{userID}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{phone}</td>
            </tr>
      </table>


      {/* <PostList /> */}
      

      <br/>

      <BrowserRouter>
      <Link to='/changepassword'>
        <button class="button-37">Change Password</button>
      </Link>
        <Route path='/ChangePassword' component={ChangePassword} />
        </BrowserRouter>
      
    </div>

  );
  
  
}


export default Tasks;