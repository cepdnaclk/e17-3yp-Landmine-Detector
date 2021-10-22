import React from 'react';
import Amplify, {API, graphqlOperation, Auth} from 'aws-amplify';

var userID   = '';

function UsereDetails(){
  
  Auth.currentUserPoolUser()
        .then(user=>{
          
          // userID = user.userID
          console.log(user)
          userID = user.username 
          console.log(userID)
        })

        return userID
}



function Tasks() {

  return(

    <div>
      <button   onClick={UsereDetails}>User Details</button>
      <h1>user ID:{userID}</h1>
      <p>{userID}</p>
      
    </div>

  );
  
  
}

export default Tasks;