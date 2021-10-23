import Auth from '@aws-amplify/auth';
import React from 'react';
import { useState } from 'react/cjs/react.development';


const password = {oldP: '', newP: ''}

function passwordHandler(oldP, newP) {
    // Auth.currentAuthenticatedUser()
    // .then(user => {
    //     return Auth.changePassword(user, oldP, newP);
    // })
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
    console.log('hello');
}



function ChangePassword() {

    const [op, setOp] = useState('')
    const [np, setNp] = useState('')


  return (
    <div>
    <input
      type="text"
      class="type-2"
      onChange={e => { 
          
        password.oldP = e.target.value
        setOp(e.target.value)
    
    }}
      placeholder= "oldpassword"
      value={password.oldP}
    />

    <input
      type="text"
      class="type-2"
      onChange={e => { password.newP = e.target.value
    
        setNp(e.target.value)
    
    }}
      placeholder= "newpassword"
      value={password.newP}
    />

    <button onClick={passwordHandler(password.oldP, password.newP)}>Change Pw</button>

  </div>  
  );
}

export default ChangePassword;