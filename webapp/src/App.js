import React, {useState, useEffect} from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { getSearch, listSearches } from './graphql/queries';
import { createSearch, updateSearch , deleteSearch } from './graphql/mutations';
import './App.css';
import Amplify, {API, graphqlOperation,Auth,Hub} from 'aws-amplify';
import config from './aws-exports';

/****************************************** */
import { Route, Router, Link, BrowserRouter } from 'react-router-dom';
import Current from './components/Current/Current';
import OpenStreetMap from './components/OpenStreetMap/OpenStreetMap';
import History from './components/History/History';
import Tasks from './components/Tasks/Tasks';
import Profile from './components/Profile/Profile';
import FAQ from './components/FAQ/FAQ';

var userID   = '';

Auth.currentUserPoolUser()
        .then(user=>{
          
          // userID = user.userID
          console.log(user)
          userID = user.username 
          console.log(userID)
        })


const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My custom email label',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    }
  ]
};



//Handle SignOut button to reload to loging page
const handleSignOutButtonClick = async () => {
  try {
      await Auth.signOut();
      Hub.dispatch('UI Auth', {   // channel must be 'UI Auth'
          event: 'AuthStateChange',    // event must be 'AuthStateChange'
          message: 'signedout'    // message must be 'signedout'
      });
  } catch (error) {
      console.log('error signing out: ', error);
  }
}; 













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

    // <div className="App">
    //   <h1>My searches App</h1>

    //   <input
    //     onChange={e => setFormData({ ...formData, 'name': e.target.value})}
    //     placeholder="search name"
    //     value={formData.name}
    //   />
    //   <input
    //     onChange={e => setFormData({ ...formData, 'description': e.target.value})}
    //     placeholder="search description"
    //     value={formData.description}
    //   />
    //   <input
    //     onChange={e => setFormData({ ...formData, 'SearchLocLoc': e.target.value})}
    //     placeholder= "123"
    //     value={formData.SearchLocLoc}
    //   />
    //   <input
    //     onChange={e => setFormData({ ...formData, 'SearchArea': e.target.value})}
    //     placeholder= "50.0"
    //     value={formData.SearchArea}
    //   />
    //   <button onClick={create}>Create search</button>
    //   <div style={{marginBottom: 30}}>
    //     {
    //       searches.map(search => (
    //         <div key={search.id || search.name }>
    //           <h2>{search.name}</h2>
    //           <p>{search.description}</p>
    //           <p>{search.SearchLocLoc}</p>
    //           <p>{search.SearchArea}</p>
		// 	  <button onClick={() => deleteS(search)}>Delete</button>
    //         </div>
    //       ))

    //     }
    //   </div>
    //   <AmplifySignOut />
    // </div>




    // <div>
    //   <Profile />
    // </div>
    <div>
    <BrowserRouter>
    <div>
    <div className='sidebar'>
      <header>LANDMINE DETECTOR</header>
      <ul >
        {/* <li><Link to='/' className='nav-link'>Profile</Link></li>
        <li><Link to='/current' className='nav-link'>Current</Link></li>
        <li><Link to='/history' className='nav-link'>History</Link></li>
        <li><Link to='/tasks' className='nav-link'>Tasks</Link></li>
        <li><Link to='/reports' className='nav-link'>Reports</Link></li>
        <br/> */}
        <li><Link to='/' className='nav-link'>Current</Link></li>
        <li><Link to='/profile' className='nav-link'>Profile</Link></li>
        <li><Link to='/history' className='nav-link'>History</Link></li>
        <li><Link to='/tasks' className='nav-link'>Tasks</Link></li>
        <li><Link to='/faq' className='nav-link'>FAQ</Link></li>

        <br/>
      </ul>



     {/* <button className='button-38' onClick={signOut}>please s</button> */}
        
      <div className="left-signout">
        <button className='button-38'  onClick={() => handleSignOutButtonClick()}> Sign Out </button>
      </div>
      

      

      </div>
        <section >
        <header>Hello ! {userID}</header>
        <div style={{paddingLeft:'25%'}}>
          <br/>
          <Route path="/" exact component={OpenStreetMap} />
          <Route path="/current" component={Current} />
          <Route path="/profile" component={Profile} />
          <Route path="/history" component={History} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/faq" component={FAQ} />
        </div>

        


        </section>

        

      
    </div>

    

       </BrowserRouter>
        {/* <AmplifySignOut /> */}
        </div>







  );
}

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
    signUpFields: [
      { label: "Name", key: "name", required: true, type: "string" }
    ]
}});
