import { geolocated } from "react-geolocated";
import { MapContainer, Popup, TileLayer, Marker, Circle, MapConsumer, useMapEvent } from 'react-leaflet'
import './OpenStreetMap.css'

/********************* */
import React, {useState, useEffect} from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { getSearch, listSearches } from '../../graphql/queries';
import { createSearch, updateSearch , deleteSearch } from '../../graphql/mutations';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import config from '../../aws-exports';

const initialFormState = { id:'akila154', RobotID: '#0001', UserID: 'akila154-1', name: 'akila+R12+01:09:55', description: '', searchLat: 6.345, searchLon: 34.034, startLot: 34.342, startLon: 23.345, LocationData: {Lat: 24.233 , Lon: 23.234, Elev:0.0, isMine:false, isObs:false,isClear:true}, PathData: {Lat: 24.233 , Lon: 23.234, Elev:0.0, isMine:false, isObs:false,isClear:true}}

Amplify.configure(config);













function CallMap(lan ,lat) {
    return(
        <MapContainer center={[lan, lat]} zoom={20}>
            {console.log('hey '+lan+' '+lat)}

            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle
                center={[lan, lat]} fillColor="blue" radius={200}
            />
        
            <Marker
                // position={[this.state.lan,this.state.lat]}
                // position={[this.state.lan,this.state.lat]}
                position={[lan, lat]}
            >
            <Popup>
                {[lan, lan]}
            </Popup>

            </Marker>
        

        </MapContainer>
    )
}









function OpenStreetMap() {

    /************************************ */
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
    
    if (!formData.name) return;
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

  /******************************* */













    
    const [lan, setLan] = useState(6.0535);
    const [lat, setLat] = useState(80.2210);
    const [area, setArea] = useState(0);
    const [des, setDes] = useState(0);

    // const map = useMapEvent('click', () => {
    //         map.setCenter([lan, lat])
    // })

    const [show, setShow] = useState(false);

    const enableMap = ()=>{
        setShow(true)
        console.log(show);
    };

    const disableMap = ()=>{
        setShow(false)
        console.log(show);
    }

    return(


    <div className="App">
      <h1>My searches App</h1>
        
      <input
        onChange={e => setFormData({ ...formData, 'id': e.target.value})}
        placeholder= "id"
        value={formData.id}
      />


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
        onChange={e => setFormData({ ...formData, 'searchLat': e.target.value})}
        placeholder= "searchLat"
        value={formData.searchLat}
      />
      <input
        onChange={e => setFormData({ ...formData, 'searchLon': e.target.value})}
        placeholder= "searchLon"
        value={formData.searchLon}
      />
      <br/>

      
      <input
        onChange={e => setFormData({ ...formData, 'startLon': e.target.value})}
        placeholder= "startLon"
        value={formData.startLon}
      />


      <button onClick={create}>Create search</button>
      <div style={{marginBottom: 30}}>
        {
          searches.map(search => (
            <div key={search.id || search.name }>
              <h2>{search.name}</h2>
              <p>{search.description}</p>
              <p>{search.searchLat}</p>
              <p>{search.searchLon}</p>
			  <button onClick={() => deleteS(search)}>Delete</button>
            </div>
          ))

        }
      </div>

        <div style={{display:'flex', justifyContent:'left'}}>
            <button class="button-37"  onClick={enableMap}>View on map</button>
            <button class="button-37"  onClick={disableMap}>Reset</button>
        </div>

            

        { show ? CallMap(lan, lat) : null}


      <AmplifySignOut />
    </div>




















        // // console.log('rerendered');
        // // console.log(this.state.lan);
        // // console.log(this.state.lat);

        


        // // const center = [this.props.lan,this.props.lat]

            
        // //Inputs and buttons
        //     <div>
        //     {console.log(lan)}
            
        //     {console.log(lat)}

        //     <h3>GPS Coordinates</h3>
           
        //     <label for="name">Longitude
        //     <br></br>
        //         <input required type="text" class="type-2" id="xx" onChange={e=>setLan(e.target.value)} value={lan} />
        //     </label>
        //     <br></br>

        //     <label for="name">Latitude
        //     <br></br>
        //         <input required type="text" class="type-2" id="" onChange={e=>setLat(e.target.value)} value={lat} />
        //     </label>
            

        //     <br></br>

        //     <label for="name">Select your robot
        //     <br></br>
        //         <input type="text" class="type-2" id="" placeholder="Robot ID" />
        //     </label>
        //     <br></br>

        //     <label for="name">Please Input the area
        //     <br></br>
        //         <input type="text" class="type-2" id="" placeholder="Area"/>
        //     </label>
            

        //     <br></br>

        //     <br></br>

        //     <div style={{display:'flex', justifyContent:'left'}}>
        //         <button class="button-37"  onClick={enableMap}>View on map</button>
        //         <button class="button-37"  onClick={disableMap}>Reset</button>
        //     </div>

            

        //     { show ? CallMap(lan, lat) : null}

            
            
        // </div>
    )
    
}







export default geolocated({
    positionOptions:{
        enableHighAccuracy:false
    },
    userDecisionTimeout:10000
})(OpenStreetMap);