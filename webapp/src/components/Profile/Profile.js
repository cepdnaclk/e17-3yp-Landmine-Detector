import React, { useEffect, useState } from 'react';
import { getSearch, listSearches } from '../../graphql/queries';
import { createSearch, updateSearch , deleteSearch } from '../../graphql/mutations';
import Amplify, {API, graphqlOperation, Auth} from 'aws-amplify';



const prof = {name: ''}

function Tasks() {

  


  Auth.currentUserPoolUser()
  .then(user=>{
    // console.log(user);
    prof.name = user.username;
    // setFormData({ ...formData, 'id': searchID})

    console.log(prof.name);
  } )

  console.log('heyyy'+prof.name);
  return(
    <div>
      {console.log('hi'+prof.name)}
      <p>{prof.name}</p>
      {/* <p>Thisara Manohara</p> */}
    </div>
  );

  }


export default Tasks;