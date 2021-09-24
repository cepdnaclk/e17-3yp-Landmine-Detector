import { Marker } from "leaflet";
import React from "react";
import { geolocated } from "react-geolocated";
import { MapContainer, Popup, TileLayer } from 'react-leaflet'

class OpenStreetMap extends React.Component {
    
    constructor() {
        super()
        this.state = {
            lan : -123,
            lat : 48
        }
    }
    
    render() {
        return(

            
            <MapContainer center={[this.state.lan,this.state.lat]} zoom={12}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        
            {/* <Marker
                // position={[this.state.lan,this.state.lat]}
                position={[-123,48]}
            >
            <Popup>
                You are here !!!
            </Popup>

            </Marker> */}
        

        </MapContainer>
        )
        
    }
    
}







export default geolocated({
    positionOptions:{
        enableHighAccuracy:false
    },
    userDecisionTimeout:10000
})(OpenStreetMap);