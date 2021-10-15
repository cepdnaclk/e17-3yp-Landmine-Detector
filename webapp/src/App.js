import React, {useState, useEffect} from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { getSearch, listSearches } from './graphql/queries';
import { createSearch, updateSearch , deleteSearch } from './graphql/mutations';
import './App.css';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';

const initialFormState = {name: 'asd', description: '', SearchLocLoc: 0.0, SearchArea: 0.0 ,LocationData: {Lat: 0.0 , Lon: 0.0, Elev:0.0, isMine:false, isObs:false,isClear:true}}

Amplify.configure(config);

function App() {
  const [searches, setSearches] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

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

  async function create() {
    
    if (!formData.name || !formData.description || !formData.SearchLocLoc) return;
//	setFormData({ ...formData, 'id': formData.SearchLocLoc})
//	formData.id = fromData.SearchLocLoc + formData.name
	console.log(formData)
    await API.graphql({ query: createSearch, variables: { input: formData } });
    setSearches([ ...searches, formData ]);
    setFormData(initialFormState);
  }

  async function deleteS({ id }) {
    const newSearchesArray = searches.filter(search => search.id !== id);
    setSearches(newSearchesArray);
    await API.graphql({ query: deleteSearch, variables: { input: { id } }});
  }

  return (

    <div className="App">
      <h1>My searches App</h1>

      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="search name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="search description"
        value={formData.description}
      />
      <input
        onChange={e => setFormData({ ...formData, 'SearchLocLoc': e.target.value})}
        placeholder= "123"
        value={formData.SearchLocLoc}
      />
      <input
        onChange={e => setFormData({ ...formData, 'SearchArea': e.target.value})}
        placeholder= "50.0"
        value={formData.SearchArea}
      />
      <button onClick={create}>Create search</button>
      <div style={{marginBottom: 30}}>
        {
          searches.map(search => (
            <div key={search.id || search.name }>
              <h2>{search.name}</h2>
              <p>{search.description}</p>
              <p>{search.SearchLocLoc}</p>
              <p>{search.SearchArea}</p>
			  <button onClick={() => deleteS(search)}>Delete</button>
            </div>
          ))

        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
