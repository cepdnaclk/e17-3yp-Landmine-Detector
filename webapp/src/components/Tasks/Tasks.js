import React, { useEffect, useState } from 'react';
import PostList from '../PostList/PostList';
import { getSearch, listSearches } from '../../graphql/queries';
import { createSearch, updateSearch , deleteSearch } from '../../graphql/mutations';
import Amplify, {API, graphqlOperation} from 'aws-amplify';

function Tasks() {

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
  return (
      <div>
        <PostList />

        <h1>Number of searches - {searches.length}</h1>

        <div>
      <table className='co-table' id="customers">
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
        {searches.map((item, index)=>{
          return(
            <tr key={index}>
          <td>{item.name}</td>
          <td>{item.description}</td>
          </tr>
          )
        })}
      </table>
    </div>

      </div> 
  );
}

export default Tasks;