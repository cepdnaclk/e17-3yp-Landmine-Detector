
import React, { useState } from "react";
import { geolocated } from "react-geolocated";
import { MapContainer, Popup, TileLayer, Marker, Circle, MapConsumer, useMapEvent } from 'react-leaflet'
import './OpenStreetMap.css'

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
        // console.log('rerendered');
        // console.log(this.state.lan);
        // console.log(this.state.lat);

        


        // const center = [this.props.lan,this.props.lat]

            
        //Inputs and buttons
            <div>
            {console.log(lan)}
            
            {console.log(lat)}

            <h3>GPS Coordinates</h3>
           
            <label for="name">Longitude
            <br></br>
                <input required type="text" class="type-2" id="xx" onChange={e=>setLan(e.target.value)} value={lan} />
            </label>
            <br></br>

            <label for="name">Latitude
            <br></br>
                <input required type="text" class="type-2" id="" onChange={e=>setLat(e.target.value)} value={lat} />
            </label>
            

            <br></br>

            <label for="name">Select your robot
            <br></br>
                <input type="text" class="type-2" id="" placeholder="Robot ID" />
            </label>
            <br></br>

            <label for="name">Please Input the area
            <br></br>
                <input type="text" class="type-2" id="" placeholder="Area"/>
            </label>
            

            <br></br>

            <br></br>

            <div style={{display:'flex', justifyContent:'left'}}>
                <button class="button-37"  onClick={enableMap}>View on map</button>
                <button class="button-37"  onClick={disableMap}>Reset</button>
            </div>

            

            { show ? CallMap(lan, lat) : null}

            
            {/* <MapContainer center={[lan, lat]} zoom={20}>
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
        

        </MapContainer> */}
        </div>
    )
    
}







export default geolocated({
    positionOptions:{
        enableHighAccuracy:false
    },
    userDecisionTimeout:10000
})(OpenStreetMap);