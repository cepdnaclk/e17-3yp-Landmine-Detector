import React, { useEffect, useState } from 'react';
import { getSearch, listSearches } from '../../graphql/queries';
import { createSearch, updateSearch , deleteSearch } from '../../graphql/mutations';
import Amplify, {API, graphqlOperation} from 'aws-amplify';

import '../History/History.css'


function History() {

  const [searches, setSearches] = useState([]);

  useEffect(() => {
    fetchSearches();
  }, []);


  async function fetchSearches() {
    try{
    const apiData = await API.graphql(graphqlOperation(listSearches));
	console.log(apiData)
    setSearches(apiData.data.listSearches.items);
    } catch (err) {
    console.log('error creating todo:', err)
  }
  }

  async function deleteS({ id }) {
    const newSearchesArray = searches.filter(search => search.id !== id);
    setSearches(newSearchesArray);
    await API.graphql({ query: deleteSearch, variables: { input: { id } }});
  }





  return (
    <div>
    {
      searches.map(search => (
        <div key={search.id || search.name } style={parent}>
          <p style={name}>{search.name}</p>
          <p style={normal}>Description: {search.description}</p>
          <p style={normal}>LAT: {search.searchLat}</p>
          <p style={normal}>LAN: {search.searchLon}</p>
          <p style={normal}>Search ID: {search.id}</p>
    <button className='button-39' onClick={() => deleteS(search)}>Delete</button>
        <br></br>
        </div>
      ))

    } 
    </div>
  );
}


const parent = {
  backgroundColor: 'grey',
  width: '90%',
  borderRadius: "25px",
  color: 'white',
  paddingBottom: '5px',
  opacity: '1'
}

const name = {
  
  fontSize: '35px',
  backgroundColor: 'black',
  borderRadius: '25px',
  textAlign: 'center'
}

const normal = {
  paddingLeft:'20px',
  fontSize: '25px'
}


export default History;