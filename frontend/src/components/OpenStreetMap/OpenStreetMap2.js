
import React from "react";
import { geolocated } from "react-geolocated";
import { MapContainer, Popup, TileLayer, Marker, Circle, MapConsumer, useMapEvent } from 'react-leaflet'

class OpenStreetMap2 extends React.Component {
    
    constructor() {
        super()
        this.state = {
            lan : 6.0535,
            lat : 80.2210
        }
        
    }





    render() {
        console.log('rerendered');
        console.log(this.state.lan);
        console.log(this.state.lat);



        // const center = [this.props.lan,this.props.lat]
        return(
            
            <div>
            
            <div style={{display:'flex', justifyContent:'space-around'}}>
                LAN: <input type="text" class="" id="xx" onChange={e=>{this.setState({
                    lan: e.target.value
                })}} value={this.state.lan} />
                LAT: <input type="text" class="" id="" onChange={e=>{this.setState(
                    {
                        lat: e.target.value
                    }
                )}} value={this.state.lat} />
            </div>
            <br/>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                Area: <input type="text" class="" id="" />
                Des: <input type="text" class="" id="" />
            </div>
            <br/>


            <MapContainer center={[this.state.lan, this.state.lat]} zoom={20}>
            {/* <MapContainer center={[this.state.lan,this.state.lat]} zoom={12}></MapContainer> */}

            <MapConsumer>
                {(map) => {
                console.log('map center:', map.getCenter())
                return null
                }}
            </MapConsumer>

            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle
                center={[this.state.lan, this.state.lat]} fillColor="blue" radius={200}
            />
        
            <Marker
                // position={[this.state.lan,this.state.lat]}
                // position={[this.state.lan,this.state.lat]}
                position={[this.state.lan, this.state.lat]}
            >
            <Popup>
                {[this.state.lan, this.state.lan]}
            </Popup>

            </Marker>
        

        </MapContainer>
        </div>
        )
    }
    
}







export default geolocated({
    positionOptions:{
        enableHighAccuracy:false
    },
    userDecisionTimeout:10000
})(OpenStreetMap2);