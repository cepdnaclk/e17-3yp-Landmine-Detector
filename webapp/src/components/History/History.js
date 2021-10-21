import React, { useEffect, useState } from 'react';
import { getSearch, listSearches } from '../../graphql/queries';
import { createSearch, updateSearch , deleteSearch } from '../../graphql/mutations';
import Amplify, {API, graphqlOperation} from 'aws-amplify';


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
        <div key={search.id || search.name }>
          <h2>{search.name}</h2>
          <p>{search.description}</p>
          <p>{search.searchLat}</p>
          <p>{search.searchLon}</p>
          <p>{search.id}</p>
    <button onClick={() => deleteS(search)}>Delete</button>
        </div>
      ))

    } 
    </div>
  );
}

export default History;