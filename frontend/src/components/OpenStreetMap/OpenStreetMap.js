
import React, { useState } from "react";
import { geolocated } from "react-geolocated";
import { MapContainer, Popup, TileLayer, Marker, Circle, MapConsumer, useMapEvent } from 'react-leaflet'



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

            
            <div>
            {console.log(lan)}
            
            {console.log(lat)}
            
            <div style={{display:'flex', justifyContent:'space-around'}}>
            LAN: <input type="text" class="" id="xx" onChange={e=>setLan(e.target.value)} value={lan} />
            LAT: <input type="text" class="" id="" onChange={e=>setLat(e.target.value)} value={lat} />
            </div>
            <br/>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                Area: <input type="text" class="" id="" />
                Des: <input type="text" class="" id="" />
            </div>
            <br/>

            <button onClick={enableMap}>View on map</button>
            <button onClick={disableMap}>Reset</button>

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