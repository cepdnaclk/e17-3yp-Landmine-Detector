
import React from "react";
import { geolocated } from "react-geolocated";
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'

class OpenStreetMap extends React.Component {
    
    constructor() {
        super()
        // this.state = {
        //     lan : this.props.lan,
        //     lat : this.props.lat
        // }
    }
    
    render() {
        return(
            <MapContainer center={[this.props.lan,this.props.lat]} zoom={12}>
            {/* <MapContainer center={[this.state.lan,this.state.lat]} zoom={12}></MapContainer> */}
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        
            <Marker
                // position={[this.state.lan,this.state.lat]}
                // position={[this.state.lan,this.state.lat]}
                position={[this.props.lan,this.props.lat]}
            >
            <Popup>
                You are here !!!
            </Popup>

            </Marker>
        

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