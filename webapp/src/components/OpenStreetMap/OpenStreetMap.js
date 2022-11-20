import { geolocated } from "react-geolocated";
import { MapContainer, Popup, TileLayer, Marker, Circle, MapConsumer, useMapEvent } from 'react-leaflet'
import './OpenStreetMap.css'



/********************* */
import React, {useState, useEffect} from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { getSearch, listSearches } from '../../graphql/queries';
import { createSearch, updateSearch , deleteSearch, createData } from '../../graphql/mutations';
import Amplify, {API, graphqlOperation, Auth} from 'aws-amplify';
import config from '../../aws-exports';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Proceed from "../Proceed/Proceed";
import PostList from "../PostList/PostList";


import axios from "axios";

const initialDate = new Date(); 



const initialFormState = { id: 'index'+initialDate.getMinutes()+initialDate.getSeconds(), RobotID: '', UserID: '', name: '', description: '', searchLat: 6.0513, searchLon: 80.2405, startLat: 34.342, startLon: 23.345}
//LocationData: {Lat: 24.233 , Lon: 23.234, Elev:0.0, isMine:false, isObs:false,isClear:true}, PathData: {Lat: 24.233 , Lon: 23.234, Elev:0.0, isMine:false, isObs:false,isClear:true}}

Amplify.configure(config);


var globalCoorinates = []


//   { }   [ ]


// const [x, setX] = useState(0);






function CallMap(lat ,lan, rad) {

  console.log('main point is '+lat+' '+lan);

  // createCoodinatesArray(6.0512, 80.2405, rad);


  console.log('rad is '+rad);
    return(
        <MapContainer center={[lat, lan]} zoom={20}>
            {console.log('hey '+lat+' '+lan)}

            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle
                center={[lat, lan]} fillColor="blue" radius={rad}
            />
        
            <Marker
                // position={[this.state.lan,this.state.lat]}
                // position={[this.state.lan,this.state.lat]}
                position={[lat, lan]}
            >
              {createCoodinatesArray(lat, lan, rad)}
            <Popup>
                {[lat, lan]}
            </Popup>

            </Marker>
        

        </MapContainer>
    )
}


const validate = (text)=> {
  var notValid = false
  // var regex = /^[A-Za-z0-9 ]+$/
  // var notValid = regex.test(text);

  if(text==='') {
    return notValid
  }


  // var letters = /^[0-9a-zA-Z]+$/;
  var letters = /^[0-9a-zA-Z \-'_]+$/;
  notValid = !(letters.test(text))

  console.log(notValid);
  return notValid
}


const validateFloat = (text)=> {
  // var notValid = false
  try{
    let parsedFloat = parseFloat(text)
    return false
  }catch(err) {
    return true
  }
}





 var searchID = '';






function createCoodinatesArray(lat, lan, rad) {

  const test = [[lat-0.0001, lan+0.0001], [lat-0.0002, lan+0.0002]];

  return(
    <div>
      {
        
        globalCoorinates.map((item)=>{
          // console.log(index);

            if (item[0] == 'landmine') {
              return(
              <div key={globalCoorinates.indexOf(item)}>

              

              <Circle
                  center={[item[1], item[2]]} fillColor="red" radius={5}
              />

              {/* <Marker
                // position={item}>
                position={[item[1], item[2]]}>
              </Marker> */}
            </div>
              )
            } else {
              return(
                <div key={globalCoorinates.indexOf(item)}>
  
                
  
                <Circle
                    center={[item[1], item[2]]} fillColor="blue" radius={5}
                />
  
                {/* <Marker
                  // position={item}>
                  position={[item[1], item[2]]}>
                </Marker> */}
              </div>
                )
            }
          
        })



        // test.forEach(item=>{
        //   console.log(item[0]);
        //   <div key={item[0]}>
        //     <Marker
        //     position={item}>
        //   </Marker>
        //   </div>
        // })
      }
        {/* <div>
        <Marker
          position={test[1]}>
        </Marker>
        </div>
        <div>
        <Marker
          position={test[0]}>
        </Marker>
        </div> */}
    </div>
  )

  // return(
  //   <Marker
  //     position={[lat-0.0001, lan+0.0001]}>
  //   </Marker>
  // );
}


async function create_data(pair, i, j, searchID) {
    
  await API.graphql({ query: createData, variables: { input: {searchLocationDataId: searchID, Lon: pair[1], Lat: pair[0], Elev: 0.001, isMine: false, isObs: false, isClear: false, id: searchID+ i.toString()+j.toString()} } });

}


function callTableToUI() {
  console.log(globalCoorinates);
  return(
    <div>
      <br/>
      <table className='co-table' id="customers">
        <tr>
            <th>Latitude</th>
            <th>Langitude</th>
            <th>Cleared</th>
            <th>Obstacle</th>
            <th>Mine</th>
        </tr>
        {globalCoorinates.map((item, index)=>{
          return(
            <tr key={index}>
          <td>{item[0].toFixed(5)}</td>
          <td>{item[1].toFixed(5)}</td>
          <td>False</td>
          <td>False</td>
          <td>False</td>
          </tr>
          )
        })}
      </table>
    </div>
  )
}



function OpenStreetMap() {

  console.log('re rendered');

  const [callTable, setCallTable] = useState(false);

  console.log('table is '+ callTable);
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
    

    axios.post('https://obscure-depths-03721.herokuapp.com/create-search', {
      lat: lat,
      lan: lan,
      rad: radius
    })
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    });


    // showLandmines();
    
    console.log('helooooooo');
    if (!formData.name) return;

    const currentdate = new Date(); 


    console.log('search id' +searchID);

    Auth.currentUserPoolUser()
  .then(user=>{
    // console.log(user);
    searchID = user.username + currentdate.getMinutes()+currentdate.getSeconds()
    setFormData({ ...formData, 'id': searchID})
    initialFormState.id = searchID
    console.log(searchID);
  } )

  
    console.log('before creating search '+ initialFormState);
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












    
    const [lan, setLan] = useState(80.2405);
    const [lat, setLat] = useState(6.0513);
    const [area, setArea] = useState(200);
    const [des, setDes] = useState(0);


    


    const radius = Math.sqrt(area / Math.PI)

    // const map = useMapEvent('click', () => {
    //         map.setCenter([lan, lat])
    // })

    const [show, setShow] = useState(false);

    const enableMap = ()=>{
        console.log('lat '+lat);
        console.log('lan '+lan);
        setShow(true)
        console.log(show);
    };

    const disableMap = ()=>{
        setShow(false)
        console.log(show);
    }

    const enableTable = ()=>{
      console.log('called table');
      setCallTable(true)
    }

    const [landmines, setLandmines] = useState([]);

    const showLandmines = ()=>{
      console.log('landmines table showed');
      axios.get('https://obscure-depths-03721.herokuapp.com/get-detections')
      .then(res=>{
        console.log("global coordinates - " + globalCoorinates);
        console.log("resp " + res.data);
        console.log("length " + res.data.length);

        
        if (landmines !== res.data) {
          if (res.data.length != 0) {
            globalCoorinates = res.data
            setLandmines(res.data);
          }
            
          
          
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }

    useEffect(()=>{
      const interval = setInterval(()=>{
        console.log("Logs in every 10 seconds");
        showLandmines();
      }, 10000);
      return () => clearInterval(interval);
    }, [])


    function callLandminesTableToUI() {
      return(
        <div>
          <br/>
          <table className='co-table' id="customers">
            <tr>
                <th>Type</th>
                <th>Latitude</th>
                <th>Langitude</th>
            </tr>
            {landmines.map((item, index)=>{
              return(
                <tr key={index}>
                  <td>{item[0]}</td>
              <td>{item[1].toFixed(5)}</td>
              <td>{item[2].toFixed(5)}</td>
              </tr>
              )
            })}
          </table>
        </div>
      )
    }




    return(


    <div className="App" className="each-slide">

      <div class="center">
        {console.log('testing')}
        {console.log(lat, lan)}
        { show ? CallMap(lat, lan, radius) : null}
      </div>

      <h3>Initialize a New Search</h3>
      
      <PostList />
      
      
        
      {/* <input
        type="text"
        class="type-2"
        // onChange={e => setFormData({ ...formData, 'id': e.target.value})}
        placeholder= "id"
        value={formData.id}
      /> */}

      <input
        id='name'
        type="text"
        class="type-2"
        onChange={e => { 
          if(validate(e.target.value)){
         // if(e.target.value==='1'){
            alert('Invalid input')
          }else{
            setFormData({ ...formData, 'name': e.target.value})
          }
          
      }}
        placeholder="search name"
        value={formData.name}
      />
      <label for='name'>Name</label>


      <br></br>

      <input
      id = 'description'
        type="text"
        class="type-2"
        onChange={e => {
          
          if(validate(e.target.value)){
            // if(e.target.value==='1'){
               alert('Invalid input')
             }else{
              setFormData({ ...formData, 'description': e.target.value})
             }

          
          }}
        placeholder="search description"
        value={formData.description}
      />
      <label for='description'>Description</label>
      <br></br>


{/* for map conatiner */}

      {/* 1 - lan
      
          2 - lat
      
      */}




      <input
      id='lan'
        type="number"
        class="type-2"
        onChange={e => {


          // if(validateFloat(e.target.value)){
          //   // if(e.target.value==='1'){
          //      alert('Invalid input')
          //    }else{
              setFormData({ ...formData, 'searchLon': parseFloat(e.target.value)})
          setLan(parseFloat(e.target.value))
            //  }


          
        }
      
      }
        placeholder= "searchLan"
        //value={formData.searchLat}
        value={lan}
      />
      <label for='lan'>Langitude</label>
      <br></br>

      <input
      id='lat'
        type="number"
        class="type-2"
        onChange={e => {
          
          // if(validateFloat(e.target.value)){
          //   // if(e.target.value==='1'){
          //      alert('Invalid input')
          //    }else{
              setFormData({ ...formData, 'searchLat': parseFloat(e.target.value)})
        setLat(parseFloat(e.target.value))  
        // console.log(lat)
        //      }
          
          
          
      }}
        placeholder= "searchLat"
        //value={formData.searchLon}
        value={lat}
      />
      <label for='lat'>Latitude</label>
      {/* ending for map container */}
      <br></br>

      
      {/* <input
        type="text"
        class="type-2"
        onChange={e => setFormData({ ...formData, 'startLon': e.target.value})}
        placeholder= "startLon"
        value={formData.startLon}
      />
      <br></br> */}

      <input
      id='area'
        type="number"
        class="type-2"
        // onChange={e => setFormData({ ...formData, 'startLon': e.target.value})}
        onChange={e=>{
          
          // if(validateFloat(e.target.value)){
          //   // if(e.target.value==='1'){
          //      alert('Invalid input')
          //    }else{
              setArea(e.target.value)}}
            //  }
          
          
          
          
        placeholder= "Area"
        value={area}
      />
      <label for='area'>Area</label>
      <br></br>

      <input
      id = 'robo'
        type="text"
        class="type-2"
        onChange={e => {
          
          if(validate(e.target.value)){
            // if(e.target.value==='1'){
               alert('Invalid input')
             }else{
              setFormData({ ...formData, 'RobotID': e.target.value})
             }

          
          }}
        placeholder="Robot ID"
        value={formData.RobotID}
      />
      <label for='robo'>Robot ID</label>
      <br></br>













      




      <button className="button-36"  onClick={create}>Create search</button>
      <br></br>
      <br></br>
      <button class="button-37"  onClick={enableMap}>View on map</button>
      <button class="button-37"  onClick={disableMap}>Reset</button>
      
      {/* <BrowserRouter>
      <Link to='/proceed'>
        <button class="button-37">Proceed</button>
      </Link>

        <Route path='/proceed' component={Proceed} />
      
        </BrowserRouter> */}

      <button class="button-37" onClick={enableTable}>Proceed</button>
      
      <div>
        {console.log(callTable)}
        {callTable ? callTableToUI(): null}
      </div>

      <div>
        <h1>Detected landmines and Obstacles</h1>
        { callLandminesTableToUI() }
      </div>


      

      {/* <div style={{marginBottom: 30}}>
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
      </div> */}
      
      
      

      
        {/* <div class="center" style={{display:'flex', justifyContent:'left'}}>
            <button class="button-37"  onClick={enableMap}>View on map</button>
            <button class="button-37"  onClick={disableMap}>Reset</button>
        </div> */}

            

        {/* { show ? CallMap(lan, lat, radius) : null} */}


      

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